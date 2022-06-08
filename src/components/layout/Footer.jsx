import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import useMouse from '@react-hook/mouse-position'

const Footer = () => {
    const ref = React.useRef(null)
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    })
    const [title, setTitle] = React.useState('')

    const { pages } = useStaticQuery(graphql`
        query {
            pages: allContentfulExpertise(
                filter: { node_locale: { eq: "en-US" } }
            ) {
                edges {
                    node {
                        backgroundImage {
                            gatsbyImageData(
                                height: 2000
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                            )
                        }
                        name
                    }
                }
            }
        }
    `)

    return (
        <footer
            ref={ref}
            className='mt-32 w-full relative flex flex-row overflow-hidden'
        >
            {/* <div className='hidden sm:block absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <span
                    className='text-5xl font-bold uppercase text-white'
                    style={{ textShadow: '0px 0px 3px white' }}
                >
                    {title}
                </span>
            </div> */}
            <Tooltip position={mouse} text={title} />

            <div className='w-full flex flex-col xl:flex-row'>
                {pages.edges.map(({ node }, index) => (
                    <Fold
                        key={index}
                        backgroundImage={node.backgroundImage}
                        name={node.name}
                        setTitle={setTitle}
                    />
                ))}
            </div>
        </footer>
    )
}

const Tooltip = ({ text, position }) => {
    return (
        <span
            className='hidden md:block absolute z-30 text-5xl text-center font-bold uppercase text-white'
            style={{
                textShadow: '0px 0px 3px white',
                left: `${(position && position.x + 20) || 0}px`,
                top: `${(position && position.y + 20) || 0}px`
            }}
        >
            {text}
        </span>
    )
}

const Fold = ({ backgroundImage, name, setTitle }) => {
    backgroundImage = getImage(backgroundImage)
    return (
        <Link className='w-full' to={`/${name}`}>
            <div
                className='relative flex-1 bg-blue transition md:transform hover:scale-150'
                onMouseEnter={() => setTitle(name)}
            >
                <div className='absolute bg-gray-50 inset-0 z-10 opacity-25' />
                <div
                    className='w-full h-40 md:h-44 xl:h-screen'
                    // style={{
                    //     backgroundImage: `url(${spec.image}) `
                    // }}
                >
                    <GatsbyImage
                        image={backgroundImage}
                        title={name}
                        alt={name}
                        className='w-full h-full'
                    />
                </div>
                <div
                    style={{ textShadow: '0px 0px 2px white' }}
                    className='p-4 absolute inset-0 z-20 font-bold text-white text-3xl uppercase md:hidden'
                >
                    {name}
                </div>
            </div>
        </Link>
    )
}

export default Footer
