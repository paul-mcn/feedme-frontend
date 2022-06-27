import React from 'react';
import HeaderText from './HeaderText';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-green-400">
            <div className="flex gap-4 items-center box-border p-5 w-11/12 mx-auto" style={{ height: "12vh" }}>
                <div className="text-white font-bold text-2xl">Feed me!</div>
                <div className='border-l-2 border-white py-4'></div>
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
        </header>
    )
}

export default Header
