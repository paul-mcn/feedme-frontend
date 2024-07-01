import { fetchData } from "@/util/api";
import { isServer, useMutation, useQuery } from "@tanstack/react-query";

export type Token = {
  token_type: string;
  access_token: string;
};

export const queryKey = "user";

export const fetchUser = async (options?: RequestInit) => {
  const res = await fetchData("/api/users/me", options);
  // for some reason an error is not thrown because res.ok comes back as true
  // even though the response is an error :(
  // This appears to only be unique to /api/users/me
  if (res.detail) throw new Error(res.detail);
  return res;
};

export const useUser = () => {
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: fetchUser,
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
