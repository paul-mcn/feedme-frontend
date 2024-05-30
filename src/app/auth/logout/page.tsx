"use client";
import Loading from "@/components/loading/Loading";
import { useUser } from "@/hooks/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Logout() {
  const { refetch } = useUser();
  const router = useRouter();
  const query = useQuery({
    queryKey: ["logout"],
    queryFn: () => fetch("/api/auth/logout").then((res) => res.text()),
  });

	console.log("query", query)

  useEffect(() => {
    (async () => {
      if (query.isSuccess) {
        await refetch();
        router.push("/auth/login");
      }
    })();
  }, [query, refetch, router]);

  return <Loading />;
}
