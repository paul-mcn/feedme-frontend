"use client"
import useUser from '@/hooks/user'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from "next/navigation";
import React, { useEffect } from 'react'

export default function Logout() {
	const { refetchUser } = useUser()
	const router = useRouter();
	const query = useQuery({
		queryKey: ['logout'],
		queryFn: () => fetch('/api/auth/logout').then(res => res.text())
	})

	useEffect(() => {
		console.log(query.isSuccess);
		(async () => {
			if (query.isSuccess) {
				console.log("isSuccess")
				await refetchUser()
				router.push("/auth/login")
			}
		})()
	}, [query, refetchUser, router])


	return (
		<div>Logout page</div>
	)
}

