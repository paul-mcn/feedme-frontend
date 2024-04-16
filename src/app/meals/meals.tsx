"use client";
import useGetMeals, { Meal } from "@/hooks/meals";

export default function Meals() {
  const { meals, isLoading } = useGetMeals();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(meals)) {
    return <div>Unable to fetch meals :(</div>;
  }

  if (meals.length === 0) {
    return <div>No meals :(</div>;
  }

  return (
    <div>
      {meals.map((meal: Meal) => (
        <div key={meal.id} className="border">
          <div>{meal.name}</div>
					<div>${meal.price}</div>
        </div>
      ))}
    </div>
  );
}
