import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const SignupMessage = props => {
    return (
        <div className='bg-gray-100 px-5 py-20'>
            <div className='flex flex-col gap-3 items-center w-5/6 mx-auto'>
                <h3 className='text-2xl'>Dont be shy</h3>
                <h4 className='font-bold'>Sign up for weekly deals!</h4>
                <div className='flex gap-1'>
                    <div className='border-black border-2 rounded-l-3xl rounded-r-md overflow-hidden'>
                        <input type="text" className='font-bold px-4 py-2 outline-0 w-full' placeholder='someone@example.com' />
                    </div>
                    <div className='border-black border-2 rounded-r-3xl rounded-l-md overflow-hidden bg-green-400 group'>
                        <button className='font-bold pl-3 py-2 outline-0 w-full pr-3 group-hover:pr-2 transition-all duration-300'>
                            Submit <FontAwesomeIcon icon={faChevronRight} className='group-hover:ml-1 transition-all duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupMessage