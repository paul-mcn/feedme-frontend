"use client";
import H1 from "@/components/headings/H1";
import React, { CSSProperties, useCallback, useMemo, useReducer } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, FormProps, useForm } from "react-hook-form";
import Input from "@/components/fields/Input";
import Textarea from "@/components/fields/Textarea";
import Button from "@/components/buttons/Button";
import { ImageInput } from "@/components/fields/ImageInput";
import clsx from "clsx";
import { ImageListType } from "react-images-uploading";
import { MealCreate, useAddMeal } from "@/hooks/meals";
import { PlusSmallIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

type Action =
  | {
      type: "INCREMENT_STEP" | "DECREMENT_STEP";
    }
  | {
      type: "SET_FIELD";
      field: string;
      payload: any;
    };

type onSubmitParams = Pick<FormProps<any>, "onSubmit">;
type onSuccessParams = Pick<FormProps<any>, "onSuccess">;
type onErrorParams = Pick<FormProps<any>, "onError">;

type State = {
  step: number;
  images: ImageListType;
};

const schema = yup
  .object({
    url: yup.string().url().required(),
    title: yup.string().required(),
    ingredients: yup.string(),
    description: yup.string(),
    price: yup.number(),
    time: yup.number(),
  })
  .required();

const maxStep = 2;
const minStep = 1;

const initialState = {
  step: minStep,
  images: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT_STEP":
      const incrementedStep = Math.min(state.step + 1, maxStep);
      return { ...state, step: incrementedStep };
    case "DECREMENT_STEP":
      const decrementedStep = Math.max(state.step - 1, minStep);
      return { ...state, step: decrementedStep };
    case "SET_FIELD":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export default function AddMealPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addMeal, isLoading } = useAddMeal();
	const router = useRouter()
  const onSubmit: onSubmitParams["onSubmit"] = async ({ event }) => {
    if (!event) {
      return;
    }
    event?.preventDefault();
    if (state.images.length === 0) {
      setError("root.images", {
        message: "Please add an image",
      });
      return;
    }
    const image = state.images[0];
    console.log(state.images);
    if (!image?.file) {
      return;
    }
    // log form data
    const imageFormData = new FormData();
    imageFormData.append("image", image.file, image.name);

    const mealFormData = new FormData(event.target);
    const meal: MealCreate = Object.fromEntries(mealFormData) as any;

    const images = state.images.map((image) => image.file);

    const response = await addMeal(meal, images as File[]);

    if (response?.ok) {
			router.push("/meals");
    }
  };
  const onSuccess: onSuccessParams["onSuccess"] = async ({ response }) => {
    console.log(await response.json());
  };
  const onError: onErrorParams["onError"] = ({ response, error }) => {
    setError("root.internal", {
      message: "Something went wrong. Please refresh and try again.",
    });
  };
  const {
    register,
    control,
    setValue,
    setError,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addHttps = (url: string) => {
    if (!url.match(/^http?:\/\//i) || !url.match(/^https?:\/\//i)) {
      url = "https://" + url;
    }
    return url;
  };

  const getTitleFromUrl = (urlString: string) => {
    try {
      const url = new URL(urlString);
      const pathnames = url.pathname.split("/").filter(Boolean);
      const titleFromUrl = pathnames.at(-1);
      const formattedTitle = titleFromUrl?.replace(/-/g, " ");
      const title = formattedTitle
        ? formattedTitle?.[0].toUpperCase() + formattedTitle?.slice(1)
        : "";
      console.log({ title });
      return title;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const getStyle = (index: number): CSSProperties | undefined => {
    if (index === state.step) {
      return { opacity: 1, pointerEvents: "auto" };
    }
    return { opacity: 0, height: 0, pointerEvents: "none" };
  };

  const updateTitleFromUrl = (url: string) => {
    setValue("title", getTitleFromUrl(url), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleUpdateImage = (imageList: ImageListType) => {
    dispatch({
      type: "SET_FIELD",
      field: "images",
      payload: imageList,
    });
  };

  const handleClickNext = async () => {
    const isValid = await trigger("url");
    if (!isValid) {
      const urlString = getValues("url");
      const urlWithHttp = addHttps(urlString);
      setValue("url", urlWithHttp, {
        shouldValidate: true,
        shouldDirty: true,
      });
      const isValidAfterHttps = await trigger("url");
      if (!isValidAfterHttps) {
        return;
      }
    }
    dispatch({ type: "INCREMENT_STEP" });
    updateTitleFromUrl(getValues("url"));
  };

  return (
    <div>
      <H1 text="Add Meal" />
      <Form
        control={control}
        onSubmit={onSubmit}
        onSuccess={onSuccess}
        onError={onError}
        className="flex flex-col gap-4 p-8 bg-white rounded-xl mt-4 max-w-xl"
      >
        <div className="flex flex-col gap-1">
          <label className="font-bold w-min" htmlFor="url">
            URL
          </label>
          <Input
            {...register("url")}
            type="url"
            id="url"
            readOnly={state.step !== minStep}
            className="read-only:text-gray-500 read-only:border-none read-only:focus-visible:outline-0"
            placeholder="https://example.com/my-recipe-1"
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.url?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1" style={getStyle(2)}>
          {errors.url?.message}
          <label className="font-bold w-min" htmlFor="title">
            Title
          </label>
          <Input
            {...register("title")}
            type="text"
            id={"title"}
            placeholder="Sausage and fennel pasta"
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.title?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1" style={getStyle(2)}>
          <label className="font-bold w-min" htmlFor="">
            Image
          </label>
          <ImageInput onChange={handleUpdateImage} />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors?.root?.images?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1" style={getStyle(2)}>
          <label className="font-bold w-min" htmlFor="ingredients">
            Ingredients
          </label>
          <Textarea
            {...register("ingredients")}
            type="ingredients"
            id="ingredients"
            placeholder={"500g Spaghetti\n1/4 cup olive oil"}
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.ingredients?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1" style={getStyle(2)}>
          <label className="font-bold w-28" htmlFor="time">
            Time{" "}
            <span className="text-sm font-normal text-gray-400">(Minutes)</span>
          </label>
          <Input
            {...register("time")}
            type="number"
            id="time"
            step="0.01"
            placeholder="e.g. 30"
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.price?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1" style={getStyle(2)}>
          <label className="font-bold w-min" htmlFor="price">
            Price
          </label>
          <Input
            {...register("price")}
            type="number"
            id="price"
            step="0.01"
            placeholder="e.g. $10.99"
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.price?.message}
          </p>
        </div>
        {errors?.root?.internal?.message && (
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.root.internal.message}
          </p>
        )}
        <div className="flex flex-roow justify-between">
          <Button
            className={clsx(
              "border-blue-500 border-2 px-4 py-2 rounded-lg mt-4 font-normal",
              state.step === minStep && "opacity-0",
            )}
            type="button"
            label="Back"
            onClick={() => dispatch({ type: "DECREMENT_STEP" })}
          />
          <Button
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 disabled:bg-gray-300 ${state.step === maxStep && "hidden"}`}
            type="button"
            label="Next"
            onClick={handleClickNext}
            disabled={getValues("url")?.length == 0}
          />
          <Button
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 ${state.step != maxStep && "hidden"}`}
            type="submit"
            label={
              <div className="flex items-center">
                <div>Add</div>
                <div>
                  {isLoading ? <ArrowPathIcon className="w-7 h-7 animate-spin" /> : <PlusSmallIcon className="w-7 h-7" />}
                </div>
              </div>
            }
          />
        </div>
      </Form>
    </div>
  );
}
