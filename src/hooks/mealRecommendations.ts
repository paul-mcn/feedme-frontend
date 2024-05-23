import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Meal } from "./meals";

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
    queryFn: () =>
      fetch("/api/users/me/meals/recommendations").then((res) => res.json()),
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
    mutationFn: (weekStartDate: Date) => {
      return fetch("/api/users/me/meals/create-recommendations", {
        method: "POST",
        body: JSON.stringify({ week_start_date: weekStartDate }),
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
    createMealRecommendations: mutation.mutate,
    isLoading: mutation.isPending,
    isSucess: mutation.isSuccess,
  };
};
