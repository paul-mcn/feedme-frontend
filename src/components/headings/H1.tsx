import React from "react"

type H1Props = {
	text: string
}

export default function H1({ text }: H1Props) {
	return (
		<h1 className="text-3xl font-bold">{text}</h1>
	)
}
