import React from 'react';
import HeaderText from './HeaderText';
import MobileHeader from './MobileHeader'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-green-400">
            <div className="hidden md:flex gap-4 items-center box-border p-5 w-11/12 mx-auto h-[20vh] md:h-[12vh]">
                <div className="text-white font-bold text-xl w-full">
                    <Link to={"/"} className='text-xs w-24'>
                        <div>Organise</div>
                        <div>My Meals</div>
                    </Link>
                </div>
                <div className='border-l-2 border-white py-6'></div>
                <Link to={"/"}>
                    <HeaderText text='Home' />
                </Link>
                <Link to={"/meals"}>
                    <HeaderText text='Meals' />
                </Link>
                <Link to={"/about"}>
                    <HeaderText text='About' />
                </Link>
                <Link className='ml-auto' to={"/login"}>
                    <HeaderText text='Login' />
                </Link>
            </div>
            <div className='block md:hidden'>
                <MobileHeader />
            </div>
        </header>
    )
}

export default Header
