import React from 'react'
import FooterList from './FooterList'
import { quickLinks, helpLinks } from "./links.js"

const Footer = () => {
    return (
        <div className='bg-gray-200 p-8' style={{ height: "25vh" }}>
            <div className="grid grid-cols-3 w-4/6 mx-auto">
                <FooterList items={quickLinks} heading="Quick Links" />
                <FooterList items={helpLinks} heading="Help Links" />
            </div>
        </div>
    )
}

export default Footer