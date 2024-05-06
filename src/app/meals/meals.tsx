"use client";
import { Meal, useGetMeals } from "@/hooks/meals";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
		<div className="grid grid-cols-4 gap-4">
			{meals.map((meal: Meal) => (
				<div key={meal.id} className="group cursor-pointer">
					<div className="relative">
						<Image
							src={meal.imageURLs[0].id}
							className="rounded-lg"
							alt={meal.title}
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
						<div className="font-bold mt-2">{meal.title}</div>
						<div className="truncate">{meal.description}</div>
						<div>${meal.price}</div>
					</div>
				</div>
			))}
		</div>
	);
}
