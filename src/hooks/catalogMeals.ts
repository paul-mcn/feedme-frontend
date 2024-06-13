import { useQuery } from "@tanstack/react-query";
import { Meal } from "./meals";
import { fetchData } from "@/util/api";

type CatalogMealsData = {
  count: number;
  meals: Array<Meal>;
};

export const queryKey = "catalog-meals";

export const useCatalogMeals = (
  filters: Array<{}> = [],
  options = { limit: 100, lastId: "" },
) => {
  const keys = [queryKey, ...filters];
  return useQuery<CatalogMealsData, Error>({
    queryKey: keys,
    queryFn: () => {
      const params = new URLSearchParams();
      options.limit && params.append("limit", String(options.limit));
      options.lastId &&
        params.append("lastEvaluatedKey", String(options.lastId));
      if (filters?.length > 0) {
        console.log("filters", filters);
        return fetchData("/api/meals");
      }
      const queryParam = params.size > 0 ? "?" + params.toString() : "";
      return fetchData("/api/meals" + queryParam);
    },
    refetchOnWindowFocus: false,
  });
};
