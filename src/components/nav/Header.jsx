import React from 'react';
import MobileHeader from './MobileHeader'
import DefaultHeader from './DefaultHeader';

const Header = (props) => {
    return (
        <header className='bg-green-400 sticky top-0 z-50'>
            <div className='hidden md:block'>
                <DefaultHeader />
            </div>
            <div className='block md:hidden'>
                <MobileHeader />
            </div>
        </header>
    )
}

export default Header
