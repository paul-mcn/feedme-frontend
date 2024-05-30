import { fetchData } from "@/util/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export type Token = {
  token_type: string;
  access_token: string;
};

export const useUser = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetchData("/api/users/me");
      // for some reason an error is not thrown because res.ok comes back as true
      // even though the response is an error :(
      if (res.detail) throw new Error(res.detail);
      return res;
    },
  });
  return query;
};

export const useSetupUser = () => {
  const mutation = useMutation({
    mutationFn: async (id) => {
      return await fetchData("/api/users/me/setup-account", { method: "POST" });
    },
  });

  return mutation;
};
