import { Meal } from "@/hooks/meals";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ImageWithFallback from "@/components/images/ImageWithFallback";

type MealCardProps = {
  meal: Meal;
};

export default function mealCard(props: MealCardProps) {
  return (
    <div
      key={props.meal.id}
      className="group cursor-pointer h-full w-full md:w-40"
    >
      <div className="relative">
        <div className="h-32 md:h-40 object-cover overflow-hidden rounded-lg">
          <ImageWithFallback
            src={props.meal.imageURLs[0].id}
            alt={props.meal.title}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="bg-white rounded-full w-16 absolute bottom-1 right-1 text-sm group-hover:block hidden">
          {props.meal.snapshotURL ? (
            <Link target="_blank" href={props.meal.snapshotURL}>
              <div className="flex justify-between items-center py-1 px-2">
                View
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            </Link>
          ) : (
            <div className="flex justify-between items-center py-1 px-2">
              Preview
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
      <div className="text-sm">
        <div className="font-bold mt-2 line-clamp-2">{props.meal.title}</div>
        <div className="truncate">{props.meal.description}</div>
        {/* <div>${props.meal.price}</div> */}
      </div>
    </div>
  );
}
