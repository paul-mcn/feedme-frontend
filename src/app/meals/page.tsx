import Meals from "./_components/meals";
import LinkButton from "@/components/buttons/Link";
import MealRecommendations from "./_components/mealRecommendations";

export default async function MealsPage() {
  return (
    <div>
      <MealRecommendations />
      <LinkButton href="/meals/add" className="mt-16 mb-4">
        Add Meal
      </LinkButton>
      <Meals />
    </div>
  );
}
