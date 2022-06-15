import * as React from 'react'
import { SEO, Navbar, CTAButtons } from './index'
import background from  "../../images/team_taep.png"

export default function Layout({ title, children }) {
    return (
        <>
            <SEO title={title} />
            <div 
            class="w-full h-full sm:bg-no-repeat bg-contain sm:bg-cover bg-bottom bg-fixed "
            style={{ 
            backgroundImage: `url(${background})`
            }}>
                <div className='text-white'>
                    <Navbar />
                    <CTAButtons />
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}
