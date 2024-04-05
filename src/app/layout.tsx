import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Organise My Meals",
	description: "Organise My Meals: Simplify Meal Planning | Personalized Menus, Smart Shopping Lists & Nutrition-Focused Recipes | Start Organizing Your Culinary Journey Now!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
