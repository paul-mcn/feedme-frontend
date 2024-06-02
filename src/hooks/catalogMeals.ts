import { useQuery } from "@tanstack/react-query";
import { Meal } from "./meals";
import { fetchData } from "@/util/api";

type CatalogMealsData = {
	count: number;
	meals: Array<Meal>;
};

export const queryKey = "catalog-meals";

export const useCatalogMeals = (filters: Array<string> = []) => {
  const keys = [queryKey, ...filters];
  return useQuery<CatalogMealsData, Error>({
    queryKey: keys,
		queryFn: () => {
			if (filters?.length > 0) {
				console.log("filters", filters);
				return fetchData("/api/meals")
			}
			return fetchData("/api/meals")
		},
    refetchOnWindowFocus: false,
  });
};
