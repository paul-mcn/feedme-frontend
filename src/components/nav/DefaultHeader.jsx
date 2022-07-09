import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import HeaderText from './HeaderText';

const DefaultHeader = props => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        // onScroll function
        const onScroll = (e) => window.scrollY === 0 ? setHasScrolled(false) : setHasScrolled(true)
        // activate the onscroll function when the user scrolls
        window.addEventListener('scroll', onScroll)
        // cleanup after component unmounts
        return () => window.removeEventListener('scroll', onScroll)
    }, [window.scrollY !== 0])

    return (
        <div className={`flex flex-col items-center`}>
            <div className="">
                <Link to={"/"} className={`block duration-100 pt-4 ${hasScrolled ? 'pb-0' : 'pb-2'}`}>
                    <p className={`font-bold text-white duration-100 ${hasScrolled ? 'text-xl' : 'text-2xl'}`}>
                        Organise My Meals
                    </p>
                </Link>
            </div>
            <div className={`px-5 w-11/12 mx-auto duration-100 ${hasScrolled ? 'pb-5 pt-0' : 'pt-5 pb-8'}`}>
                <div className={`flex justify-between items-center`}>
                    <div className='flex gap-4'>
                        <Link to={"/"}>
                            <HeaderText text='Home' />
                        </Link>
                        <Link to={"/meals"}>
                            <HeaderText text='Meals' />
                        </Link>
                        <Link to={"/about"}>
                            <HeaderText text='About' />
                        </Link>
                    </div>
                    <Link className='' to={"/login"}>
                        <HeaderText text='Login' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DefaultHeader