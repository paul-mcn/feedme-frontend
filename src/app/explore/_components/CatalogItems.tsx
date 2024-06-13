"use client";
import MealCard from "@/components/cards/MealCard";
import { useAtomValue } from "jotai";
import React from "react";
import { filtersAtom } from "./ExploreFilterForm";
import { useCatalogMeals } from "@/hooks/catalogMeals";
import Loading from "@/components/loading/Loading";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import AddItem from "./AddItem";
import { twMerge } from "tailwind-merge";

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
            <div className={twMerge("flex flex-col gap-1")} key={meal.id}>
              <MealCard key={idx} meal={meal} />
              <div className="flex flex-row gap-2 w-full justify-between mt-2">
                <AddItem mealId={meal.id} />
                {meal.snapshotURL && (
                  <Link
                    className="text-green-500 font-bold py-1 pl-2 pr-1.5 rounded border-2 border-green-500 text-center"
                    href={meal.snapshotURL}
                    target="_blank"
                  >
                    <div className="flex flex-row gap-1 items-center">
                      <span className="text-sm">View</span>
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return <Loading />;
}
