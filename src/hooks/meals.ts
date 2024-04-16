"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export type Meal = {
  id: string;
  name: string;
  price: number;
};

const useGetMeals = () => {
  const query = useQuery({
    queryKey: ["meals"],
    queryFn: () => fetch("/api/users/me/meals").then((res) => res.json()),
  });

  const getMeals = (): Meal[] | undefined => {
    // dodgy hack to get user or undefined
    // until i can find a better way to return no user from server
    if (!query.data) return undefined;
    const keys = Object.keys(query.data);
    if (keys.length === 1 && keys[0] === "detail") return undefined;
    return query.data.meals;
  };

  return {
    meals: getMeals(),
		isLoading: query.isLoading,
    refetchMeals: query.refetch,
  };
};

export default useGetMeals;

// Mutations
// const mutation = useMutation({
// 	mutationFn: postTodo,
// 	onSuccess: () => {
// 		// Invalidate and refetch
// 		queryClient.invalidateQueries({ queryKey: ['meals'] })
// 	},
// })
