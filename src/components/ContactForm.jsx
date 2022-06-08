import * as React from 'react'
import Linkedin from './Linkedin'

export default function ContactForm() {
    return (
        <section className='px-6 sm:p-0 flex flex-row sm:space-x-12 max-w-3xl mx-auto my-24'>
            <div className='hidden sm:block bg-blue-1000 p-8 shadow-2xl text-white'>
                <h3 className='text-3xl font-bold mb-4 text-yellow-300'>
                    Contactez nous
                </h3>
                <div className='flex flex-col space-y-4'>
                    <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href='mailto:taep@ensta-paris.fr'
                        className='flex items-start space-x-2'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 text-white'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                        </svg>
                        <span>taep@ensta-paris.fr</span>
                    </a>
                    <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href='https://www.linkedin.com/company/taep-ensta-paris/'
                        className='flex items-start space-x-2'
                    >
                        <Linkedin />
                        <span>/taep-ensta-paris</span>
                    </a>
                </div>
            </div>

            <div className='flex-1 text-black'>
                <h2 className='text-4xl font-bold mb-8'>À votre tour</h2>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWbxjbnwMCEievSgnP3rosK6P-TlHxcvZb-EWN8eQBSbk_Mg/viewform?embedded=true" width="640" height="780" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
            </div>
        </section>
    )
}
