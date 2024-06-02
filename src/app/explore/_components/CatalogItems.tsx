"use client";
import MealCard from "@/components/cards/MealCard";
import { useAtomValue } from "jotai";
import React from "react";
import { twMerge } from "tailwind-merge";
import { filtersAtom } from "./ExploreFilterForm";
import { useCatalogMeals } from "@/hooks/catalogMeals";
import Loading from "@/components/loading/Loading";

type CatalogItemsProps = {
  className?: string;
};

export default function CatalogItems({ className }: CatalogItemsProps) {
  const filters = useAtomValue(filtersAtom);
  const { data, error, isLoading } = useCatalogMeals();
  if (data && data.count > 0) {
    return (
      <div
        className={twMerge(
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 place-items-center",
          className,
        )}
      >
        {data.meals.map((meal, idx) => {
          return (
            <MealCard
              key={idx}
              meal={meal}
            />
          );
        })}
      </div>
    );
  }
  return <Loading />;
}
