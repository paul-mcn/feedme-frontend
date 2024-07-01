import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchUser, queryKey } from "@/hooks/user";
import { QueryClient } from "@tanstack/react-query";
import getAuthToken from "@/util/getAuthToken";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const token = getAuthToken();

      const options: RequestInit = {};
      if (token) {
        options.headers = {
          Accept: "application/json",
          authorization: `${token.token_type} ${token.access_token}`,
        };
      }

      return await fetch("/api/users/me", options);
    },
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex flex-col max-h-screen">
              <div className="flex-1">
                <NavBar />
              </div>
              <div className="bg-gray-100 min-h-[88vh]">{children}</div>
            </div>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
