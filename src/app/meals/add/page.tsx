"use client";
import H1 from "@/components/headings/H1";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, useForm } from "react-hook-form";
import Input from "@/components/fields/Input";
const schema = yup
	.object({
		username: yup.string().required(),
		password: yup.string().min(4).required(),
	})
	.required();

export default function AddMealPage() {
	const serverErrorMessage = "";
	const onSuccess = () => { };
	const onError = () => { };
	const {
		register,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<div>
			<H1 text="Add Meal" />
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
