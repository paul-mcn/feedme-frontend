"use client";
import { useGetMealRecommendations } from "@/hooks/mealRecommendations";
import React from "react";
import MealCard from "./mealCard";
import { format as formatDate } from "date-fns";
import Loading from "@/components/loading/Loading";

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
      <div className="grid grid-cols-7 gap-4">
        {mealRecommendations.map(({ meal, date }) => (
          <div className="flex flex-col gap-2" key={meal.id}>
            <div className="text-sm font-bold">{formatDate(date, "iii")}</div>
            <MealCard meal={meal} />
          </div>
        ))}
      </div>
    </div>
  );
}
