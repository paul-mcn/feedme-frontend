"use client";
import Input from "@/components/fields/Input";
import H1 from "@/components/headings/H1";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userFullName } from "@/state/user";

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
	const [fullName, setFullName] = useAtom(userFullName)

	const onSuccess = async ({ response }: { response: Response }) => {
		const token = await response.json();
		setCookie("token", JSON.stringify(token));
		setFullName("Porl")
		// get user data from token
		// setUser(token)
		router.push("/");
	};


	return (
		<div className="max-w-md mx-auto">
			<H1 text="Login" />
			<Form
				action="/api/auth/token"
				method="post"
				control={control}
				onSuccess={onSuccess}
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
