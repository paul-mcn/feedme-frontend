import { IngredientGroup } from "@/hooks/meals";

export default function ingredientsListToString(
  ingredients: IngredientGroup[],
) {
  return ingredients
    .map((group) => {
      const groupString = group.groupValues
        .map((ingredient) => {
          return `${ingredient.value} ${ingredient.unit} ${ingredient.title}`;
        })
        .join("\n");
      return `${group.groupName}:\n${groupString}`;
    })
    .join("\n");
}
