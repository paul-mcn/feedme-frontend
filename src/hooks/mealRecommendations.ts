import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Meal } from "./meals";
import { fetchData } from "@/util/api";

type MealRecommendationRaw = {
  meal: Meal;
  date: string;
};

type MealRecommendationsRaw = {
  mealRecommendations: MealRecommendationRaw[];
  expirationDate: string;
};

export type MealRecommendation = {
  meal: Meal;
  date: Date;
};

export type MealRecommendations = {
  mealRecommendations: MealRecommendation[];
  expirationDate: Date;
};

const queryKey = "mealRecommendations";
export const useGetMealRecommendations = () => {
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return await fetchData("/api/users/me/meals/recommendations");
    },
    select: (data: MealRecommendationsRaw): MealRecommendations => {
      return {
        mealRecommendations: data.mealRecommendations.map((mr) => ({
          meal: mr.meal,
          date: new Date(mr.date),
        })),
        expirationDate: new Date(data.expirationDate),
      };
    },
  });
  return query;
};

export const useCreateMealRecommendations = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (weekStartDate: Date) => {
      const res = await fetch("/api/users/me/meals/create-recommendations", {
        method: "POST",
        body: JSON.stringify({ week_start_date: weekStartDate }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    retry: false,
  });
  return mutation;
};
