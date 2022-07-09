import React, { useState } from 'react';
import AddMealForm from './AddMealForm';
import DefaultLayout from '../../components/page-templates/DefaultLayout';
import GhostInput from '../../components/inputs/GhostInput';
import LargeMealCard from '../../components/cards/LargeMealCard'
import { ADD_MEAL } from '../../services/mutations';
import { useMutation } from '@apollo/client/react';
import WelcomeMessage from '../../components/headings/WelcomeMessage';

const CreateMealPage = props => {

    const [mealname, setMealname] = useState("")
    const [book, setBook] = useState("")
    const [page, setPage] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(5)
    const [photo, setPhoto] = useState("")

    const handleOnMealnameInput = (e) => setMealname(e.target.value)
    const handleOnBookInput = (e) => setBook(e.target.value)
    const handleOnPageInput = (e) => setPage(e.target.value)
    const handleOnDescriptionInput = (e) => setDescription(e.target.value)
    const handleOnRatingInput = (e) => setRating(e.target.value)
    const handleOnPhotoInput = (e) => setPhoto(e.target.value)

    const fields = [
        {
            label: "Meal Name",
            toolTip: "Name of the meal",
            input: <GhostInput onInput={handleOnMealnameInput} placeholder='Bolognese' required={true} />
        },
        {
            label: "Book",
            toolTip: "Where the recipe is located. E.g. The Chefs Companion, pg 15",
            input: <GhostInput onInput={handleOnBookInput} placeholder='Beginners Cook Book' required={true} />
        },
        {
            label: "Page",
            toolTip: "Where the recipe is located. E.g. The Chefs Companion, pg 15",
            input: <GhostInput onInput={handleOnPageInput} placeholder='Beginners Cook Book' required={true} />
        },
        {
            label: "Description",
            toolTip: "Brief Description of the meal",
            input: <GhostInput onInput={handleOnDescriptionInput} required={true} placeholder='Quo distinctio voluptatem qui recusandae deserunt dolores occaecati dolorem ratione. Quaerat aut fuga officia officiis id est natus. Nam officiis reprehenderit aspernatur officia nihil placeat ut. Quis repellat suscipit.' />
        },
        {
            label: "Rating",
            toolTip: "out of 5",
            input: <GhostInput onInput={handleOnRatingInput} type={'number'} required={true} placeholder='5' max={5} min={1} step={0.1} />
        },
        {
            label: "Photo",
            toolTip: "Upload photo from url",
            input: <GhostInput onInput={handleOnPhotoInput} required={true} placeholder='https://google.com/image/123.jpg' />
        }
    ]

    const meal = {
        name: mealname,
        book: book,
        page: page,
        description: description,
        rating: rating,
        photoUrl: photo
    }

    const [addMeal, { data, loading, error }] = useMutation(ADD_MEAL)

    const onSubmit = (e) => {
        console.log("submit")
        e.preventDefault();
        addMeal({
            variables: {
                "$meal": meal
            }
        }).then(console.log).catch(e => console.log(e))
    }

    return (
        <DefaultLayout>
            <div className='w-full lg:w-5/6 lg:mx-auto xl:w-4/6'>
                <WelcomeMessage message='Create Meal' />
                <div className='flex flex-col lg:flex-row gap-10 justify-between items-center mt-4 pb-20'>
                    <div className='flex-1 w-full md:w-5/6'>
                        <AddMealForm fields={fields} className='pb-10' onSubmit={onSubmit} />
                    </div>
                    <div className='flex-1'>
                        <div className='bg-white drop-shadow-xl w-min p-5 rounded-xl'>
                            <LargeMealCard meal={meal} />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default CreateMealPage