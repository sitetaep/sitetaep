import * as React from 'react'
import { SEO, Navbar, CTAButtons } from './index'
import background from  "../../images/team_taep.png"

export default function Layout({ title, children }) {
    return (
        <>
            <SEO title={title} />
            <div 
            class="w-full h-full bg-no-repeat bg-cover sm:bg-cover bg-center sm:bg-top bg-fixed hidden md:block"
            style={{
            backgroundImage: `url(${background})`
            }}>
                <div className='text-white'>
                    <div className='bg-gray-100'>
                        <Navbar />
                    </div>
                    <CTAButtons />
                    <main>{children}</main>
                </div>
            </div>
            <div class="w-full h-full bg-blue-1000 block md:hidden">
                <div className='text-white'>
                    <Navbar />
                    <CTAButtons />
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}
