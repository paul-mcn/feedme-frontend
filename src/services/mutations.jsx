import { gql } from "@apollo/react-components";

const ADD_MEAL = gql`
    mutation AddMeal($meal: MealInput!) {
        addMeal(newMeal: $meal) {
            name
            description
        }
    }
`

export { ADD_MEAL }