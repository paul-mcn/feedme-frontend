import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between mt-20 items-center">
        <div className="flex flex-col gap-5 pr-4">
          <h1 className="text-3xl font-bold">Organise My Meals</h1>
          <p className="max-w-xs">
            Discover your perfect meal plan today! Let us organise meals based
            on your preferences, from diets to cuisines.
          </p>
          <Link href="/auth/login" className="w-40">
            <div className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-40 text-center">
              Join for free!
            </div>
          </Link>
        </div>
        <div className="">
          <Image
            src="/hero-image.jpg"
            alt="hero image of food"
            width={450}
            height={600}
            priority
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
