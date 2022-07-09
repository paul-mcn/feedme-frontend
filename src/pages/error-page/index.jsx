import React from 'react'
import NavigationButton from '../../components/buttons/NavigationButton'

const ErrorPage = props => {
    const style = { height: "63vh" }
    return (
        <div className='w-11/12 mx-auto' style={style}>
            <div className='p-10'>
                <h2 className='font-bold text-4xl'>
                    404 error page not found
                </h2>
                <div className='w-28 mt-10'>
                    <NavigationButton text='Home' to='/' />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage