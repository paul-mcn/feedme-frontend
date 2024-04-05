import { useGetMeals } from "@/hooks/meals";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Meals from "./meals";

export default async function MealsPage() {
  // const meals = useGetMeals();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["meals"],
    queryFn: () => fetch("/api/meals").then((res) => res.json()),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Meals />
    </HydrationBoundary>
  );
}
