"use client"
import { useQuery, useQueryClient } from "@tanstack/react-query"

// Access the client
const queryClient = useQueryClient()

export const useGetMeals = () => {

	// Queries
	const query = useQuery({ queryKey: ['meals'], queryFn: () => fetch('/meals').then(res => res.json()) })
	return query
}

// Mutations
// const mutation = useMutation({
// 	mutationFn: postTodo,
// 	onSuccess: () => {
// 		// Invalidate and refetch
// 		queryClient.invalidateQueries({ queryKey: ['meals'] })
// 	},
// })
