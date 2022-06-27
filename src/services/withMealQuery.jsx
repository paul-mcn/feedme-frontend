import { gql } from '@apollo/client'

const MEALS_QUERY = gql`{ 
    meals {
        id
        name
        location
        description
        photoUrl
        rating
    }
}`

const FAVOURITE_MEALS_QUERY = gql`{ 
    favouriteMeals(id:1) {
        id
        name
        location
        description
        photoUrl
        rating
    }
}`

const SUGGESTED_MEALS_QUERY = gql`{ 
    suggestedMeals(id:1) {
        id
        name
        location
        description
        photoUrl
        rating
    }
}`

export { MEALS_QUERY, FAVOURITE_MEALS_QUERY, SUGGESTED_MEALS_QUERY }