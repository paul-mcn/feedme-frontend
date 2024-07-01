"use client";
import MealCard from "@/components/cards/MealCard";
import { useAtomValue } from "jotai";
import React from "react";
import { filtersAtom } from "./ExploreFilterForm";
import { useCatalogMeals } from "@/hooks/catalogMeals";
import Loading from "@/components/loading/Loading";
import Link from "next/link";
import AddItem from "./AddItem";
import HoverStyledCard from "@/components/cards/HoverStyledCard";

export default function CatalogItems() {
  // const filters = useAtomValue(filtersAtom);
  const { data, error } = useCatalogMeals();
  if (data && data.count === 0) {
    return <div className="text-center font-bold">No results</div>;
  }
  if (data && data.count > 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 md:gap-y-20 place-items-center">
        {data.meals.map((meal, idx) => {
          return (
            <HoverStyledCard className="relative">
              <Link href={meal.snapshotURL || "/"}>
                <div className="h-72" key={meal.id}>
                  <MealCard key={idx} meal={meal} />
                </div>
              </Link>
              <div className="absolute bottom-2 left-2">
                <AddItem mealId={meal.id} />
              </div>
            </HoverStyledCard>
          );
        })}
      </div>
    );
  }
  return <Loading />;
}
