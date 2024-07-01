import React from "react";
import Button from "@/components/buttons/Button";
import { useFollowMeal } from "@/hooks/meals";
import { ArrowPathIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

type AddItemProps = {
  mealId: any;
  onClick?: (mealId: string) => void;
};

export default function AddItem(props: AddItemProps) {
  const followMeal = useFollowMeal();
  const handleFollowMeal = (mealId: string) => {
    followMeal.mutate(mealId);
    props.onClick && props.onClick(mealId);
  };
  return (
    <Button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 pl-2 pr-1.5 rounded text-center disabled:bg-gray-400 transition-colors h-9"
      disabled={followMeal.isPending || followMeal.isSuccess}
      label={
        <div className="flex flex-row gap-1 items-center">
          <span className="text-sm">Add</span>
          {followMeal.isPending ? (
            <ArrowPathIcon className="w-7 h-7 animate-spin" />
          ) : followMeal.isSuccess ? (
            <CheckCircleIcon className="w-6 h-6" />
          ) : (
            <PlusCircleIcon className="w-6 h-6" />
          )}
        </div>
      }
      onClick={() => handleFollowMeal(props.mealId)}
    />
  );
}
