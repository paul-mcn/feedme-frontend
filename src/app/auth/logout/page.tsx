"use client";
import Loading from "@/components/loading/Loading";
import { useUser, queryKey as userQueryKey } from "@/hooks/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey as mealRecommendationsQueryKey } from "@/hooks/mealRecommendations";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { queryKey as mealsQueryKey } from "@/hooks/meals";
import { fetchData } from "@/util/api";

export default function Logout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const logout = useMutation({
    mutationFn: async () => {
      return await fetchData("/api/auth/logout", { method: "POST" });
    },
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: [userQueryKey],
      });
    },
  });

  useEffect(() => {
    (async () => {
      if (!logout.isPending) {
        await logout.mutateAsync();
      }
      if (logout.isSuccess) {
        router.push("/auth/login");
      }
    })();
  }, [logout, router]);

  return <Loading />;
}
