"use client";
import {
  useCreateMealRecommendations,
  useGetMealRecommendations,
} from "@/hooks/mealRecommendations";
import React, { useEffect } from "react";
import MealCard from "./mealCard";
import { format as formatDate, isFuture } from "date-fns";
import Loading from "@/components/loading/Loading";
import HorizontalLinkCard from "@/components/cards/HorizontalLinkCard";

export default function MealRecommendations() {
  const {
    data: recommendations,
    isPending,
    refetch: refetchMealRecommendations,
    error: recommendationsError,
  } = useGetMealRecommendations();

  const {
    mutate: createMealRecommendations,
    isPending: isCreatingRecommendations,
    isSuccess,
    error: createError,
  } = useCreateMealRecommendations();

  // Refetch recommendations if they are created
  useEffect(() => {
    if (isSuccess) {
      refetchMealRecommendations();
    }
  }, [isSuccess]);

  // Create recommendations if they don't exist
  useEffect(() => {
    if (
      !isPending &&
      !isCreatingRecommendations &&
      !isSuccess &&
      recommendations &&
      // dont recreate recommendations on error
      !createError?.message &&
      // no recommendations exist or are expired
      (recommendations.mealRecommendations.length === 0 ||
        !isFuture(recommendations?.expirationDate))
    ) {
      createMealRecommendations(new Date());
    }
  }, [
    isPending,
    isCreatingRecommendations,
    isSuccess,
    recommendations,
    createError,
    createMealRecommendations,
  ]);

  if (recommendationsError) {
    console.log(recommendationsError);
    return <div className="font-bold">{recommendationsError.message}</div>;
  }

  if (createError) {
    return <div className="font-bold">{createError.message}</div>;
  }

  if (recommendations) {
    return (
      <div className="flex flex-col gap-6">
        <div className="font-bold text-lg">
          {"G'day! Here are the meals for this week"}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 items-center justify-center">
          {recommendations.mealRecommendations.map(({ meal, date }) => (
            <div className="flex flex-col gap-2 w-full" key={meal.id}>
              <div className="text-sm font-bold">{formatDate(date, "iii")}</div>
              <HorizontalLinkCard
                key={meal.id}
                imageURL={meal.imageURLs[0].id}
                title={meal.title}
                description={meal.description}
								imageAlt={`Image of ${meal.title}`}
								link={meal.snapshotURL}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isCreatingRecommendations) {
    return (
      <div>
        <Loading message={"Creating recommendations..."} />
      </div>
    );
  }

  return <Loading className="h-20" />;
}
