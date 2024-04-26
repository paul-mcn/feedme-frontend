import useGetMeals from "@/hooks/meals";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Meals from "./meals";
import LinkButton from "@/components/buttons/Link";

export default async function MealsPage() {
  // TODO implement prefetching query
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  // 	queryKey: ["meals"],
  // 	queryFn: () => fetch("/api/meals").then((res) => res.json()),
  // });

  // console.log(meals)

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <div>
      <LinkButton href="/meals/add" className="mb-4">
        Add Meal
      </LinkButton>
      <Meals />
    </div>
    // </HydrationBoundary>
  );
}
