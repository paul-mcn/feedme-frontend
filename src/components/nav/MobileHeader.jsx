import React from 'react';
import { Link } from 'react-router-dom'
import HeaderText from './HeaderText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileHeader = props => (
    <div className="flex gap-4 items-center box-border p-5 w-11/12 mx-auto h-[20vh] md:h-[12vh]">
        <div className='flex flex-col'>
            <button className='text-white border-2 rounded-lg w-min'>
                <FontAwesomeIcon icon={faBars} className='text-2xl p-2 block' />
            </button>
            <div className=''>
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
        </div>
        <div className="text-white font-bold text-xl w-full">
            <Link to={"/"} className='text-xs w-24'>
                <div>Organise</div>
                <div>My Meals</div>
            </Link>
        </div>

        <Link className='ml-auto' to={"/login"}>
            <HeaderText text='Login' />
        </Link>
    </div>
)

export default MobileHeader