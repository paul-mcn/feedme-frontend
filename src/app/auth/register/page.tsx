"use client";
import Input from "@/components/fields/Input";
import H1 from "@/components/headings/H1";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { onErrorParams } from "../login/page";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(4).required(),
  })
  .required();

export default function RegisterPage() {
  const {
    register,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSuccess = async ({ response }: { response: Response }) => {
    const token = await response.json();
    setCookie("token", JSON.stringify(token));
    router.push("/");
  };

  const onError: onErrorParams = async ({ response }) => {
    if (response) {
      const res = await response.json();
      setError("root.error", {
        message: res.detail,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <H1 text="Register" />
      <Form
        action="/api/auth/register"
        method="post"
        control={control}
        onSuccess={onSuccess}
        onError={onError}
        className="flex flex-col gap-4 p-8 bg-white rounded-xl mt-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <Input {...register("email")} type="text" name="email" id="email" />
          <p className="text-red-500 text-xs px-1 first-letter:capitalize">
            {errors.email?.message}
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
				<p className="text-red-500 text-xs px-1 first-letter:capitalize">
					{errors.root?.error?.message}
				</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          type="submit"
        >
          Register
        </button>
      </Form>
    </div>
  );
}
