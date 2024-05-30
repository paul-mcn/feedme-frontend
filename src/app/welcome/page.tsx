"use client";
import Loading from "@/components/loading/Loading";
import { useSetupUser } from "@/hooks/user";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const { mutate: setupUser, data } = useSetupUser();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("/meals");
    }
    if (!data) {
      setupUser();
    }
  }, [setupUser, data]);

  return (
    <div>
      <Loading message="Setting up account..." />
    </div>
  );
}
