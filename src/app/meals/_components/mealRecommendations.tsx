"use client";
import { useGetMealRecommendations } from "@/hooks/mealRecommendations";
import React from "react";
import MealCard from "./mealCard";
import { format as formatDate } from "date-fns";

export default function mealRecommendations() {
  const { mealRecommendations, isLoading } = useGetMealRecommendations();
  return (
    <div className="flex flex-col gap-6">
      <div className="font-bold text-lg">G'day! Here are your weekly meals</div>
      <div className="grid grid-cols-7 gap-4">
        {mealRecommendations.map(({ meal, date }) => (
          <div className="flex flex-col gap-2" key={meal.id}>
            <div className="text-sm font-bold">
              {formatDate(date, "iii")}
            </div>
            <MealCard meal={meal} />
          </div>
        ))}
      </div>
    </div>
  );
}
