import * as React from 'react'
import Linkedin from './Linkedin'

export default function ContactForm() {
    return (
        <section className='px-6 sm:p-0 flex sm:flex-row flex-col space-y-10 sm:space-x-12 max-w-3xl mx-auto my-24'>
            <div className=' bg-blue-1000 p-8 shadow-2xl text-white'>
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

            <div className='flex-1 text-black scale-50'>
                <h2 className='text-4xl font-bold mb-8'>?? votre tour</h2>
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSeWbxjbnwMCEievSgnP3rosK6P-TlHxcvZb-EWN8eQBSbk_Mg/formResponse"
                    method='POST'
                    className='flex flex-col space-y-4'
                >
                    <input
                        className='py-2 px-4 bg-gray-50 shadow-inner border-2 border-gray-50 hover:border-yellow-300'
                        type='text'
                        name="entry.1562379310"
                        id='name'
                        placeholder='Nom'
                    />
                    <input
                        className='py-2 px-4 bg-gray-50 shadow-inner border-2 border-gray-50 hover:border-yellow-300'
                        type='text'
                        name="entry.675783753"
                        id='email'
                        placeholder='Email'
                    />
                    <textarea
                        className='py-2 px-4 bg-gray-50 shadow-inner border-2 border-gray-50 hover:border-yellow-300'
                        rows={4}
                        name="entry.1584428018"
                        placeholder='D??crivez votre projet'
                    />
                    <input
                        className='bg-yellow-300 text-blue-900 px-8 py-2 cursor-pointer'
                        type='submit'
                        value='Envoyer'
                    />
                </form>
            </div>
        </section>
    )
}
