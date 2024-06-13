import { Meal } from "@/hooks/meals";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ImageWithFallback from "@/components/images/ImageWithFallback";

type MealCardProps = {
  meal: Meal;
};

export default function MealCard(props: MealCardProps) {
  return (
    <div key={props.meal.id} className="h-full w-40">
      <div className="h-32 md:h-40 object-cover overflow-hidden rounded-lg">
        <ImageWithFallback
          src={props.meal.imageURLs[0].id}
          alt={props.meal.title}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="text-sm">
        <div className="font-bold mt-2 text-sm line-clamp-2 text-slate-900 h-10">{props.meal.title}</div>
        <div className="truncate text-xs text-gray-500">{props.meal.description}</div>
        {/* <div>${props.meal.price}</div> */}
      </div>
    </div>
  );
}
