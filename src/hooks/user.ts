import { useQuery } from "@tanstack/react-query"

export type Token = {
	token_type: string,
	access_token: string
}

const useUser = () => {
	const query = useQuery({
		queryKey: ['user'],
		queryFn: () => fetch('/api/users/me').then(res => res.json())
	})

	const getUser = () => {
		// dodgy hack to get user or undefined
		// until i can find a better way to return no user from server 
		if (!query.data) return undefined
		const keys = Object.keys(query.data)
		if (keys.length === 1 && keys[0] === "detail") return undefined
		return query.data
	}

	return {
		user: getUser(),
		refetchUser: query.refetch
	}
}

export default useUser;
