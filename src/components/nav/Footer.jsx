import React from 'react'
import FooterList from './FooterList'
import { quickLinks, helpLinks } from "./links.js"

const Footer = () => {
    return (
        <div className='bg-gray-200 p-8 h-full lg:h-[25vh]'>
            <div className='lg:w-4/6 text-center lg:text-left lg:mx-auto'>
                <div
                    className="grid grid-cols-1 gap-5 md:gap-2 md:grid-cols-2 items-center lg:grid-cols-3">
                    <FooterList items={quickLinks} heading="Quick Links" />
                    <FooterList items={helpLinks} heading="Help Links" />
                </div>
            </div>
        </div>
    )
}

export default Footer