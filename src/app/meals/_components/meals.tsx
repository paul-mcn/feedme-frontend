"use client";
import { Meal, useGetMeals } from "@/hooks/meals";
import MealCard from "@/components/cards/MealCard";
import Loading from "@/components/loading/Loading";
import Link from "next/link";
import HoverStyledCard from "@/components/cards/HoverStyledCard";

export default function Meals() {
  const { data, isPending, error } = useGetMeals();
  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  if (!Array.isArray(data.meals)) {
    return <div>Unable to fetch meals :(</div>;
  }

  if (data.meals.length === 0) {
    return <div>No meals :(</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {data.meals.map((meal: Meal) => (
        <HoverStyledCard>
          <Link href={meal.snapshotURL || "/"}>
            <MealCard key={meal.id} meal={meal} />
          </Link>
        </HoverStyledCard>
      ))}
    </div>
  );
}
