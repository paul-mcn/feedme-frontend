"use client";
import Input from "@/components/fields/Input";
import React, { useState } from "react";
import ExploreFilterForm, {
  filtersAtom,
} from "./_components/ExploreFilterForm";
import CatalogItems from "./_components/CatalogItems";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

export default function ExplorePage() {
  const [shouldShowFilters, setShouldShowFilters] = useState(false);
  const toggleShouldShowFilters = () => {
    setShouldShowFilters((prev) => !prev);
  };
  return (
    <div className="flex flex-row h-full relative min-h-[88vh]">
      {shouldShowFilters && (
        <div className="bg-black/50 absolute top-0 left-0 w-full h-full z-10 md:hidden"></div>
      )}
      <div
        className={twMerge(
          "md:flex flex-col gap-3 bg-white shadow-lg border-t md:w-1/5 bottom-0 overflow-y-auto z-20 md:-left-0 md:translate-x-0 md:rounded-none md:top-0 md:relative",
          shouldShowFilters
            ? "block absolute left-1/2 -translate-x-1/2 top-10 w-3/4 rounded-t-lg"
            : "hidden",
        )}
      >
        <div className="border-b p-4">
          <ExploreFilterForm onSubmit={toggleShouldShowFilters} />
        </div>
      </div>
      <div className="h-full w-full md:w-4/5">
        <div className="bg-white z-10 border p-2 md:p-4 flex flex-row gap-3 max-h-[9vh]">
          <div
            className="md:hidden block border border-gray-300 p-1 rounded-lg"
            onClick={toggleShouldShowFilters}
          >
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          </div>
          <Input className="w-full" placeholder="Search" />
          <div className="flex flex-1 gap-1 w-full items-center text-sm">
            <div className="w-max">Sort By</div>
            <select className="border rounded-lg p-1">
              <option value="most_popular">Most Popular</option>
              <option value="highest_rated">Highest Rated</option>
              <option value="recently_added">Recently Added</option>
            </select>
          </div>
        </div>
        <div className="max-h-[79vh] overflow-y-auto mx-2 md:mx-4 py-10">
          <CatalogItems />
        </div>
      </div>
    </div>
  );
}
