import useGetMeals from "@/hooks/meals";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Meals from "./meals";

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
    <div className="">
      <Meals />
    </div>
    // </HydrationBoundary>
  );
}
