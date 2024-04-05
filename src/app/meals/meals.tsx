"use client"
import { useGetMeals } from "@/hooks/meals";
import { useQuery } from "@tanstack/react-query";

export default function Meals() {
	const {data} = useQuery({ queryKey: ['meals'], queryFn: () => fetch('/api/meals').then(res => res.json()) })
	console.log(data)
	return <div>Meals</div>;
}
