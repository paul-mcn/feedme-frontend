"use client";
import React, { useMemo } from "react";
import * as yup from "yup";
import { atom, useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/buttons/Button";
import Input from "@/components/fields/Input";
import { Accordian } from "@/components/layout/Accordian";
import _ from "lodash";

export const filtersAtom = atom({});
const validationSchema = yup.object().shape({
  dietary: yup.array().of(yup.string()),
  mealType: yup.array().of(yup.string()),
  cuisine: yup.array().of(yup.string()),
  ingredients: yup.array().of(yup.string()),
  prepTime: yup.number().min(15).max(90).default(90),
  // cookingMethod: yup.array().of(yup.string()),
  // skillLevel: yup.string().oneOf(["Beginner", "Intermediate", "Advanced"]),
  // nutrition: yup.array().of(yup.string()),
  // occasions: yup.array().of(yup.string()),
  sortBy: yup
    .string()
    .oneOf(["most_popular", "highest_rated", "recently_added"])
    .default("most_popular"),
  // season: yup.string().oneOf(["spring", "summer", "autumn", "winter"]),
});

type Filters = yup.InferType<typeof validationSchema>;

const dietaryOptions = [
  { value: "Keto", label: "Keto" },
  { value: "Vegan", label: "Vegan" },
  { value: "Vegetarian", label: "Vegetarian" },
  { value: "Gluten-Free", label: "Gluten-Free" },
];
const mealTypeOptions = [
  { value: "Breakfast", label: "Breakfast" },
  { value: "Lunch", label: "Lunch" },
  { value: "Dinner", label: "Dinner" },
  { value: "Snacks", label: "Snacks" },
];
const cuisineOptions = [
  { value: "Italian", label: "Italian" },
  { value: "Chinese", label: "Chinese" },
  { value: "Japanese", label: "Japanese" },
  { value: "Mexican", label: "Mexican" },
];
const ingredientsOptions = [
  { value: "Chicken", label: "Chicken" },
  { value: "Beef", label: "Beef" },
  { value: "Tofu", label: "Tofu" },
  { value: "Quinoa", label: "Quinoa" },
];

type ExploreFilterFormProps = {
  onSubmit?: () => void;
};

const ExploreFilterForm = (props: ExploreFilterFormProps) => {
  const { handleSubmit, register, watch, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: validationSchema.cast({}),
  });

  const [filters, setFilters] = useAtom(filtersAtom);

  const prepTimeLabel = useMemo(() => {
    const value = watch("prepTime", 90);
    if (value === 90 || !value) {
      return "Any";
    }
    return `${value} minutes or less`;
  }, [watch("prepTime")]);

  const compareFilters = (
    a1: Array<string | undefined> | undefined,
    a2: Array<{ value: string }>,
  ) => {
    if (!a1 || !Array.isArray(a1)) return [];
    const result: Array<string> = [];
    a1?.forEach((value, idx) => {
      value === "true" && result.push(a2[idx].value);
    });
    return result;
  };

  const onSubmit = (data: Filters) => {
    if (!data) {
      props.onSubmit && props.onSubmit();
      return setFilters(data);
    }
    console.log({ data });
    const newFilters = {
      dietary: compareFilters(data?.dietary, dietaryOptions),
      mealType: compareFilters(data?.mealType, mealTypeOptions),
      cuisine: compareFilters(data?.cuisine, cuisineOptions),
      ingredients: compareFilters(data?.ingredients, ingredientsOptions),
      prepTime: data.prepTime,
      // cookingMethod: yup.array().of(yup.string()),
      // skillLevel: yup.string().oneOf(["Beginner", "Intermediate", "Advanced"]),
      // nutrition: yup.array().of(yup.string()),
      // occasions: yup.array().of(yup.string()),
      sortBy: data.sortBy,
      // season: yup.string().oneOf(["spring", "summer", "autumn", "winter"]),
    };
    setFilters(data);
    props.onSubmit && props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Accordian title="Dietary Preferences">
        {dietaryOptions.map((option, idx) => (
          <label key={idx} className="flex items-center w-fit">
            <Input
              type="checkbox"
              className="mr-2"
              {...register(`dietary.${idx}`, {
                setValueAs: (value) => Boolean(value),
              })}
            />
            <span className="select-none">{option.label}</span>
          </label>
        ))}
      </Accordian>
      <Accordian title="Meal Type">
        {mealTypeOptions.map((option, idx) => (
          <label key={idx} className="flex items-center w-fit">
            <Input
              type="checkbox"
              className="mr-2"
              {...register(`mealType.${idx}`)}
            />
            <span className="select-none">{option.label}</span>
          </label>
        ))}
      </Accordian>
      <Accordian title="Cuisine">
        {cuisineOptions.map((option, idx) => (
          <label key={idx} className="flex items-center w-fit">
            <Input
              type="checkbox"
              className="mr-2"
              {...register(`cuisine.${idx}`)}
            />
            <span className="select-none">{option.label}</span>
          </label>
        ))}
      </Accordian>
      <Accordian title="Ingredients">
        {ingredientsOptions.map((option, idx) => (
          <label key={idx} className="flex items-center w-fit">
            <Input
              type="checkbox"
              className="mr-2"
              {...register(`ingredients.${idx}`)}
            />
            <span className="select-none">{option.label}</span>
          </label>
        ))}
      </Accordian>
      <Accordian title="Cooking Time" className="w-full">
        <label className="text-xs">{prepTimeLabel}</label>
        <div className="w-full">
          <datalist id="markers">
            <option value="15" />
            <option value="30" />
            <option value="45" />
            <option value="60" />
            <option value="75" />
            <option value="90" />
          </datalist>
          <input
            type="range"
            list="markers"
            step={15}
            min={15}
            max={90}
            className="w-full"
            {...register("prepTime", {
              setValueAs: (value) => parseInt(value),
            })}
          />
        </div>
      </Accordian>
      {/** 
			<div>
        <h4>Cooking Method</h4>
        <Controller
          name="cookingMethod"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="checkbox" {...field} />
                No-cook
              </label>
              <label>
                <input type="checkbox" value="Stovetop" {...field} />
                Stovetop
              </label>
              <label>
                <input type="checkbox" value="Oven" {...field} />
                Oven
              </label>
              <label>
                <input type="checkbox" value="Slow Cooker" {...field} />
                Slow Cooker
              </label>
            </>
          )}
        />
      </div>

			*/}
      {/** 
      <div>
        <h4>Skill Level</h4>
        <Controller
          name="skillLevel"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="radio" value="Beginner" {...field} />
                Beginner
              </label>
              <label>
                <input type="radio" value="Intermediate" {...field} />
                Intermediate
              </label>
              <label>
                <input type="radio" value="Advanced" {...field} />
                Advanced
              </label>
            </>
          )}
        />
      </div>
	*/}
      {/**
      <div>
        <h4>Nutritional Information</h4>
        <Controller
          name="nutrition"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="checkbox" value="Low Calorie" {...field} />
                Low Calorie
              </label>
              <label>
                <input type="checkbox" value="High Protein" {...field} />
                High Protein
              </label>
              <label>
                <input type="checkbox" value="Low Carb" {...field} />
                Low Carb
              </label>
            </>
          )}
        />
      </div>

      <div>
        <h4>Special Occasions</h4>
        <Controller
          name="occasions"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="checkbox" value="Holiday meals" {...field} />
                Holiday meals
              </label>
              <label>
                <input type="checkbox" value="Party recipes" {...field} />
                Party recipes
              </label>
              <label>
                <input type="checkbox" value="Romantic dinners" {...field} />
                Romantic dinners
              </label>
            </>
          )}
        />
      </div>

      <div>
        <h4>Season</h4>
        <Controller
          name="season"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          )}
        />
      </div>
			*/}
      <div className="flex flex-row items-center gap-3 mx-auto flex-wrap">
        <Button
          label="Reset"
          onClick={() => reset()}
          type="button"
          className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 text-sm"
        />
        <Button
          label="Apply"
          type="submit"
          className="bg-green-200 px-4 py-2 rounded-lg text-green-800 text-sm"
        />
      </div>
    </form>
  );
};

export default ExploreFilterForm;
