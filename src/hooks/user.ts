import { useMutation, useQuery } from "@tanstack/react-query";

export type Token = {
  token_type: string;
  access_token: string;
};

export const useUser = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/users/me");
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail);
      }
      return res.json();
    },
  });

  const getUser = () => {
    // dodgy hack to get user or undefined
    // until i can find a better way to return no user from server
    if (isAuthenticated()) {
      return query.data;
    }
    return undefined;
  };

  const isAuthenticated = () => {
    if (!query.data) return false;
    const keys = Object.keys(query.data);
    if (keys.length === 1 && keys[0] === "detail") return false;
    return true;
  };

  return {
    user: getUser(),
    refetchUser: query.refetch,
    isAuthenticated,
    isLoadingUser: query.isLoading,
  };
};

export const useSetupUser = () => {
  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch("/api/users/me/setup-account");
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail);
      }
      return res.json();
    },
  });

  return mutation;
};
