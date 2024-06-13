"use client";
import { fetchData } from "@/util/api";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryFunction,
} from "@tanstack/react-query";

export type Ingredient = {
  unit: string;
  value: string;
  title: string;
};

export type IngredientGroup = {
  groupName: string;
  groupValues: Ingredient[];
};

type ImageURLs = {
  id: string;
};

export type Meal = {
  id: string;
  title: string;
  ingredients: IngredientGroup[] | string;
  description: string;
  imageURLs: ImageURLs[];
  price: number;
  time: number;
  snapshotURL?: string;
  notes?: string;
};

export type MealCreate = {
  title: string;
  ingredients: string;
  description: string;
  price: number;
  time: number;
  imageURLs?: ImageURLs[];
  snapshotURL?: string;
  notes?: string;
};

type Fields = {
  key: string;
  policy: string;
  signature: string;
  [key: string]: string;
};

type PresignedPostIn = {
  url: string;
  fields: Fields;
};

type PresignedPostOut = {
  fields: FormData;
  url: string;
};

export const queryKey = "user-meals";

/**
 * For user-specific meals
 *
 * @param {Array<string>} [filters] - filters for query
 * @returns Meal Array
 */
export const useGetMeals = (
  filters: Array<{}> = [],
  options = { limit: 100, lastId: "" },
) => {
  const keys = [queryKey, ...filters];
  const query = useQuery({
    queryKey: keys,
    queryFn: () => {
      const params = new URLSearchParams();
      options.limit && params.append("limit", String(options.limit));
      options.lastId &&
        params.append("lastEvaluatedKey", String(options.lastId));
      if (filters?.length > 0) {
        throw new Error("Not implemented 🙃");
      }
      // if (filters?.length > 0) {
      //   return fetchData("/api/users/me/meals");
      // }
      const queryParam = params.size > 0 ? "?" + params.toString() : "";
      return fetchData("/api/users/me/meals" + queryParam);
    },
  });
  return query;
};

export const useUpsertMealSnapshot = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (url: string) => {
      return fetch("/api/users/me/meals/snapshot", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
  return {
    addMealSnapshot: mutation.mutate,
    isLoading: mutation.isPending,
    snapshotData: mutation.data,
  };
};

export const useAddMeal = () => {
  const queryClient = useQueryClient();
  const addMealMutation = useMutation({
    mutationFn: (meal: MealCreate) => {
      return fetch("/api/users/me/meals/add", {
        method: "POST",
        body: JSON.stringify(meal),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const getPostImageSignedUrl = async (): Promise<PresignedPostIn> => {
    const response = await fetch("/api/file/image-upload");
    return await response.json();
  };

  const imageUploadMutation = useMutation({
    mutationFn: (presignedPost: PresignedPostOut) => {
      return fetch(presignedPost.url, {
        method: "POST",
        body: presignedPost.fields,
      });
    },
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const mergeObjectWithFormData = (obj: any, formData: FormData) => {
    const newFormData = new FormData();
    Object.keys(obj).forEach((key) => {
      newFormData.append(key, obj[key]);
    });
    formData.forEach((value, key) => {
      newFormData.append(key, value);
    });
    return newFormData;
  };

  const addMeal = async (meal: MealCreate, images: File[]) => {
    const postSignedUrlResponse = await getPostImageSignedUrl();
    if (!postSignedUrlResponse) {
      return console.log("waah no image", postSignedUrlResponse);
    }

    const file = images[0];
    const newFile = new File([file], postSignedUrlResponse.fields.key, {
      type: file.type,
    });
    const newFormData = new FormData();
    newFormData.append("file", newFile);
    const formFields = mergeObjectWithFormData(
      postSignedUrlResponse.fields,
      newFormData,
    );

    try {
      await imageUploadMutation.mutateAsync({
        url: postSignedUrlResponse.url,
        fields: formFields,
      });
      const newMeal = {
        ...meal,
        imageURLs: [{ id: postSignedUrlResponse.fields.key }],
      };
      const response = await addMealMutation.mutateAsync(newMeal);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addMeal: addMeal,
    isLoading: addMealMutation.isPending || imageUploadMutation.isPending,
  };
};

export const useFollowMeal = () => {
  // const queryClient = useQueryClient();
  const followMutation = useMutation({
    mutationFn: (mealId: string) => {
      return fetchData("/api/users/me/meals/follow", {
        method: "POST",
        body: JSON.stringify({ mealId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: (data, variables) => {
      // queryClient.setQueryData([queryKey, { id }], (oldData: any) => {
      //   console.log(oldData);
      //   return oldData;
      // });
    },
  });
  return followMutation;
};
