import { useQuery } from "@tanstack/react-query";
import { Meal } from "./meals";

export type MealRecommendations = {
  meal: Meal;
  date: Date;
};

const queryKey = "mealRecommendations";
export const useGetMealRecommendations = () => {
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      fetch("/api/users/me/meals/recommendations").then((res) => res.json()),
  });

  const getMealRecommendations = (): MealRecommendations[] => {
    if (!query.data?.mealRecommendations) return [];
    return query.data.mealRecommendations;
  };

  return {
    mealRecommendations: getMealRecommendations(),
    isLoading: query.isPending,
  };
};
