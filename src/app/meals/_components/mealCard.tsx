import { Meal } from "@/hooks/meals";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type MealCardProps = {
  meal: Meal;
};

export default function mealCard(props: MealCardProps) {
  return (
    <div key={props.meal.id} className="group cursor-pointer">
      <div className="relative">
        <Image
          src={props.meal.imageURLs[0].id}
          className="rounded-lg"
          alt={props.meal.title}
          width={200}
          height={200}
          priority
        />
        <div className="bg-white rounded-full w-16 absolute bottom-1 right-2 text-sm py-1 px-2 group-hover:block hidden">
          <div className="flex justify-between items-center">
            View
            <ChevronRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="text-sm">
        <div className="font-bold mt-2">{props.meal.title}</div>
        <div className="truncate">{props.meal.description}</div>
        <div>${props.meal.price}</div>
      </div>
    </div>
  );
}
