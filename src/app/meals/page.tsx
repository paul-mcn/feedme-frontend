import Meals from "./meals";
import LinkButton from "@/components/buttons/Link";

export default async function MealsPage() {
  return (
    <div>
      <LinkButton href="/meals/add" className="mb-4">
        Add Meal
      </LinkButton>
      <Meals />
    </div>
  );
}
