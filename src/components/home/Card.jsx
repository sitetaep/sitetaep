import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'

export default function Card({ image, title, text, number, right }) {
    return (
        <div
            className={`relative p-8 max-w-xl mx-auto bg-gray-50 flex items-end ${
                right ? 'flex-row-reverse' : 'flex-row'
            }`}
        >
            <div className='hidden sm:block'>
                <span className='text-8xl font-bold text-gray-200'>
                    {number}.
                </span>
            </div>
            <div className={`max-w-sm sm:${right ? 'mr-10' : 'ml-10'}`}>
                <h3
                    className={`text-2xl font-semibold ${
                        right ? 'text-left' : 'text-right'
                    } mb-4`}
                >
                    {title}
                </h3>
                <p>{text}</p>
            </div>

            <img
                className={`absolute sm:block top-0 h-32 sm:h-40 transform ${
                    right
                        ? 'sm:right-0 sm:translate-x-1/3'
                        : 'sm:left-0 sm:-translate-x-1/3'
                } -translate-y-28 sm:-translate-y-2/3`}
                alt={title}
                src={image}
            />
        </div>
    )
}
