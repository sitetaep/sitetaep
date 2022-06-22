import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Dropdown = ({ options, title }) => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div className='cursor-pointer'>
            <span
                className='select-none relative'
                onMouseEnter={() => setVisible(true)}
            >
                <button class="bg-yellow-300 hover:bg-yellow-400 font-bold py-2 sm:px-4 px-2 rounded">
                {title}
                </button>
            </span>

            {visible && (
                <div
                    onMouseLeave={() => setVisible(false)}
                    className='absolute flex flex-col mt-2 py-1 rounded shadow-xl bg-white'
                >
                    {options &&
                        options.map((option, index) => (
                            <Link
                                key={index}
                                to={option.link}
                                className='py-2 px-4 hover:bg-gray-100 text-black font-light'
                            >
                                {option.title}
                            </Link>
                        ))}
                </div>
            )}
        </div>
    )
}


export default function Navbar() {
    const { pages } = useStaticQuery(graphql`
        query {
            pages: allContentfulExpertise {
                distinct(field: name)
            }
        }
    `)

    return (
        <nav className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between items-center'>
            <ul className='hidden sm:px-12 sm:flex sm:flex-row sm:space-x-12 uppercase text-black font-bold'> 
                <li>
                    <Dropdown
                        title='Nos Spécialités'
                        options={pages.distinct.map((name) => ({
                            title: capitalize(name),
                            link: `/${name.toLowerCase()}`
                        }))}
                    />
                </li>
                <li>
                    <Link to='/demo#demosection'><button class="bg-yellow-300 hover:bg-yellow-400 font-bold py-2 sm:px-4 rounded">Comment ça marche?</button></Link>
                </li>
            </ul>

            <div>
                <Link to='/'>
                    <button class="bg-gray-100 rounded hover:bg-gray-300 p-3">
                        <StaticImage
                            height={80}
                            src='../../images/logo.png'
                            alt='TAEP'
                            title='TAEP'
                            placeholder='blurred'
                        />
                    </button>
                </Link>
            </div>
            
            <ul className='sm:hidden flex flex-row space-x-5 uppercase text-black font-bold'> 
                <li>
                    <Dropdown
                        title='Nos Spécialités'
                        options={pages.distinct.map((name) => ({
                            title: capitalize(name),
                            link: `/${name.toLowerCase()}`
                        }))}
                    />
                </li>
                <li>
                    <Link to='/demo#demosection'><button class="bg-yellow-300 hover:bg-yellow-400 font-bold py-2 sm:px-4 px-2 rounded">Comment ça marche?</button></Link>
                </li>
            </ul>
            <ul className='sm:px-12 flex flex-row sm:space-x-12 space-x-5 uppercase text-black font-bold'>    
                <li>
                    <Link to='/ensta#enstasection'><button class="bg-yellow-300 hover:bg-yellow-400 font-bold py-2 sm:px-4 px-2 rounded">ENSTA Paris</button></Link>
                    </li>
                <li>
                    <Link to='/equipe#equipesection'><button class="bg-yellow-300 hover:bg-yellow-400 font-bold py-2 sm:px-4 px-2 rounded">Notre Equipe</button></Link>
                </li>
                {/* <li>
                    <Link to='/ecosysteme'>Ecosystème</Link>
                </li> */}
            </ul>
        </nav>        
    )
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}
