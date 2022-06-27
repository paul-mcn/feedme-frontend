import React from 'react'

const ErrorPage = props => {
    const style = { height: "63vh"}
    return (
        <div className='w-11/12 mx-auto' style={style}>
            <div className='p-10'>
                <h2 className='font-bold text-4xl'>
                    404 error page not found
                </h2>
            </div>
        </div>
    )
}

export default ErrorPage