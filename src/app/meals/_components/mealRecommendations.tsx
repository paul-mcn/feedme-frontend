"use client";
import { useGetMealRecommendations } from "@/hooks/mealRecommendations";
import React from "react";
import MealCard from "./mealCard";
import { format as formatDate } from "date-fns";
import Loading from "@/components/loading/Loading";
import Link from "next/link";

export default function MealRecommendations() {
  const { mealRecommendations, isLoading } = useGetMealRecommendations();

  if (isLoading) {
    return <Loading className="h-20" />;
  }

  if (mealRecommendations.length === 0) {
    return <div>No recommendations</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="font-bold text-lg">
        {"G'day! Here are the meals for this week"}
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8">
        {mealRecommendations.map(({ meal, date }) => (
          <div className="flex flex-col gap-2" key={meal.id}>
            <div className="text-sm font-bold">{formatDate(new Date(date), "iii")}</div>
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
