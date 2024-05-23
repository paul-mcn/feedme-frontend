"use client";
import {
  useCreateMealRecommendations,
  useGetMealRecommendations,
} from "@/hooks/mealRecommendations";
import React, { useEffect } from "react";
import MealCard from "./mealCard";
import { format as formatDate, isFuture } from "date-fns";
import Loading from "@/components/loading/Loading";
import Link from "next/link";

export default function MealRecommendations() {
  const {
    data: recommendations,
    isPending,
    refetch: refetchMealRecommendations,
  } = useGetMealRecommendations();

  const {
    createMealRecommendations,
    isLoading: isCreatingRecommendations,
    isSucess,
  } = useCreateMealRecommendations();

  // Refetch recommendations if they are created
  useEffect(() => {
    if (isSucess) {
      refetchMealRecommendations();
    }
  }, [isSucess]);

  // Create recommendations if they don't exist
  useEffect(() => {
    if (
      !isPending &&
      !isCreatingRecommendations &&
      !isSucess &&
      recommendations &&
      // no recommendations exist or are expired
      (recommendations.mealRecommendations.length === 0 ||
        !isFuture(recommendations?.expirationDate))
    ) {
      createMealRecommendations(new Date());
    }
  }, [
    isPending,
    isCreatingRecommendations,
    isSucess,
    recommendations,
    createMealRecommendations,
  ]);

  if (isPending) {
    return <Loading className="h-20" />;
  }

  if (recommendations?.mealRecommendations.length === 0) {
    const message = isCreatingRecommendations
      ? "Creating recommendations now..."
      : "Woah there, you don't have any recommendations yet...";

    return (
      <div>
        <Loading message={message} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="font-bold text-lg">
        {"G'day! Here are the meals for this week"}
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8">
        {recommendations?.mealRecommendations.map(({ meal, date }) => (
          <div className="flex flex-col gap-2" key={meal.id}>
            <div className="text-sm font-bold">{formatDate(date, "iii")}</div>
            {meal.snapshotURL ? (
              <Link href={meal.snapshotURL}>
                <MealCard meal={meal} />
              </Link>
            ) : (
              <MealCard meal={meal} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
