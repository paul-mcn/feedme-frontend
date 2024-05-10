"use client";
import { Meal, useGetMeals } from "@/hooks/meals";
import MealCard from "./mealCard";
import Loading from "@/components/loading/Loading";

export default function Meals() {
  const { meals, isLoading } = useGetMeals();
  if (isLoading) {
    return <Loading />;
  }

  if (!Array.isArray(meals)) {
    return <div>Unable to fetch meals :(</div>;
  }

  if (meals.length === 0) {
    return <div>No meals :(</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {meals.map((meal: Meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}