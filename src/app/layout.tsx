import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const title = "Organise My Meals";
const description =
  "Discover delicious meal recommendations with our app! Whether you're looking for easy dinner recipes, quick healthy meals, or vegetarian and vegan options, we’ve got you covered. Explore low-carb meal plans, family-friendly dinners, budget-friendly meals, and gluten-free ideas. From Mediterranean diet recipes to keto dinners and high-protein meals, our app offers simple lunch ideas, comfort food recipes, and convenient one-pot meals. Start planning your perfect meal today!";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    description,
    title,
    url: "https://organisemymeals.com/",
  },
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
          <div className="bg-gray-100 min-h-screen">
            <div className="w-10/12 md:w-4/5 mx-auto">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
