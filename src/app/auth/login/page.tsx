"use client";
import Input from "@/components/fields/Input";
import H1 from "@/components/headings/H1";
import React, { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/user";

type onErrorParams = ({
  response,
  error,
}:
  | {
      response: Response;
      error?: undefined;
    }
  | {
      response?: undefined;
      error: unknown;
    }) => void;

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(4).required(),
  })
  .required();

export default function LoginPage() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const { refetchUser, isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, [isAuthenticated]);

  const onSuccess = async () => {
    await refetchUser();
  };

  const onError: onErrorParams = (payload) => {
    if (!payload.response?.status) {
      return setServerErrorMessage("Something went wrong. Please try again.");
    }

    if (payload.response?.status >= 500) {
      setServerErrorMessage(
        "We're sorry, but our system is currently undergoing maintenance. Please try logging in or registering again in a few moments.",
      );
    }

    if (payload.response?.status === 401) {
      setServerErrorMessage("Incorrect username or password");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <H1 text="Login" />
      <Form
        action="/api/auth/login"
        method="post"
        control={control}
        onSuccess={onSuccess}
        onError={onError}
        className="flex flex-col gap-4 p-8 bg-white rounded-xl mt-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <Input
            {...register("username")}
            type="text"
            name="username"
            id="username"
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.username?.message}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <Input
            {...register("password")}
            type="password"
            name="password"
            id="password"
          />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.password?.message}
          </p>
        </div>
        {serverErrorMessage.length > 0 && (
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {serverErrorMessage}
          </p>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          type="submit"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
