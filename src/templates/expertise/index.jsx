import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import { Navbar, Footer, SEO, CTAButtons } from '../../components/layout'
import ContactForm from '../../components/ContactForm'
import ConsultantCard from './ConsultantCard'

const Arrow = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className='hidden sm:block w-32'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1}
            d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
    </svg>
)

const Step = ({ number, title, text }) => (
    <div className='w-full flex flex-col items-center space-y-4 text-center'>
        <span className='text-4xl flex justify-center items-center font-semibold border border-black rounded-full w-24 h-24'>
            {number}
        </span>
        <h3 className='text-2xl'>{title}</h3>
        <p>{text}</p>
    </div>
)

const CommentCaMarche = () => (
    <section className='my-24 px-6 max-w-5xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-4'>
            Comment ca marche ?
        </h2>
        <div className='w-full px-4 py-10 flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8'>
            <Step
                number={1}
                title='Votre Projet'
                text='Parlez nous de votre projet, les enjeux, les objectifs et vos besoins.'
            />
            <Arrow />
            <Step
                number={2}
                title='Notre Solution'
                text='Dans les plus brefs délais, vous recevez une proposition détaillée: intervenant, budget, délai et livrables'
            />
            <Arrow />
            <Step
                number={3}
                title='Votre Satisfaction'
                text="Vous êtes accompagné tout au long du projet pour s'assurer du bon déroulement de la mission."
            />
        </div>
    </section>
)

const CaseStudy = ({ image, title, description, tag, link }) => {
    image = getImage(image)

    return (
        <div className='container mx-auto my-5'>
            <div className='relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl mx-2 md:h-96 lg:h-80'>
                <div className='z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg'>
                    <GatsbyImage
                        className='absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom'
                        image={image}
                        alt={title}
                        title={title}
                    />

                    <div className='md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900'>
                        <h3 className='w-full font-bold text-2xl text-white leading-tight mb-2'>
                            {title}
                        </h3>
                        <span className='text-sm uppercase text-gray-100 leading-tight'>
                            {tag}
                        </span>
                    </div>
                    <svg
                        className='hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12'
                        viewBox='0 0 100 100'
                        preserveAspectRatio='none'
                    >
                        <polygon points='50,0 100,0 50,100 0,100' />
                    </svg>
                </div>

                <div className='z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0'>
                    <div className='p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none flex flex-col'>
                        <span className='hidden md:block text-sm uppercase text-gray-400'>
                            {tag}
                        </span>
                        <h3 className='hidden md:block font-bold text-2xl text-gray-700 mb-2'>
                            {title}
                        </h3>

                        <div className='flex-1'>
                            {description.split('\\n').map((text, i) => (
                                <p className='text-gray-400' key={i}>
                                    {text}
                                </p>
                            ))}
                        </div>

                        {/* <a
                            className='flex items-baseline mt-3 text-yellow-300 hover:text-blue-900 focus:text-blue-900'
                            href={link}
                        >
                            <span>En savoir plus</span>
                            <span className='text-xs ml-1'>&#x279c;</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Carousel = ({ children }) => {
    const slides = children.length || 1
    const [activeIndex, setActiveIndex] = React.useState(0)

    function slideBack() {
        if (activeIndex === 0) return
        setActiveIndex(activeIndex - 1)
    }

    function slideForward() {
        if (activeIndex === slides - 1) return
        setActiveIndex(activeIndex + 1)
    }

    return (
        <div className='relative'>
            {activeIndex === 0 ? null : (
                <div
                    onClick={slideBack}
                    className='absolute z-50 left-0 top-1/2 transform -translate-y-full -translate-x-1/4 bg-white rounded-full flex items-center justify-center w-8 h-8 border border-gray-100 shadow cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 transform rotate-180'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                    </svg>
                </div>
            )}
            {activeIndex === slides - 1 ? null : (
                <div
                    onClick={slideForward}
                    className='absolute z-50 right-0 top-1/2 transform -translate-y-full translate-x-1/4 bg-white rounded-full flex items-center justify-center w-8 h-8 border border-gray-100 shadow cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                    </svg>
                </div>
            )}
            {children[activeIndex]}
        </div>
    )
}

const Page = ({
    name,
    backgroundImage,
    header,
    subheader,
    descriptionConsultant,
    consultants,
    skills,
    examples
}) => {
    const image = getImage(backgroundImage)

    return (
        <>
            <SEO title={header} />
            <section
            // className='relative bg-no-repeat bg-bottom bg-cover bg-fixed'
            // style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <BgImage image={image} alt={header}>
                    <div
                        style={{
                            background:
                                'linear-gradient(180deg, #34304C 15.84%, rgba(52, 48, 76, 0.558279) 72.53%, rgba(52, 48, 76, 0.173205) 94.06%, rgba(52, 48, 76, 0) 100%)'
                        }}
                    >
                        <Navbar />
                        <div className='max-w-4xl mx-auto text-center px-4 py-12 sm:p-20'>
                            <h1 className='text-white mb-8'>{header}</h1>
                            <p className='text-lg text-white'>{subheader}</p>
                        </div>
                    </div>
                </BgImage>
            </section>

            <section className='my-24 max-w-5xl mx-auto'>
                <h2 className='text-4xl font-bold mb-4 text-center'>
                    Que pouvons-nous réaliser pour vous ?
                </h2>
                <div className='flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-10 px-6 py-8'>
                    {skills &&
                        skills.map((item, idx) => {
                            const image = getImage(item.image)
                            return (
                                <div
                                    key={idx}
                                    className='flex flex-col items-center space-y-10 text-center'
                                >
                                    <div className='relative w-1/2'>
                                        <GatsbyImage
                                            image={image}
                                            alt={item.title}
                                            title={item.title}
                                            className='w-32 h-32 rounded-xl shadow-2xl'
                                        />
                                        <h4 className='absolute text-left left-0 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium uppercase bg-yellow-300 p-2 rounded shadow'>
                                            {item.title}
                                        </h4>
                                    </div>
                                    <div className='max-w-xs px-4 pt-8'>
                                        {item.description
                                            .split('\\n')
                                            .map((item, i) => (
                                                <p key={i}>{item}</p>
                                            ))}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </section>

            <section className='my-24 max-w-5xl mx-auto px-6'>
                <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8'>
                    <div className='max-w-md flex flex-col space-y-4'>
                        <h2 className='mb-8'>Nos intervenants</h2>
                        <>
                            {descriptionConsultant ? (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: descriptionConsultant
                                            .childMarkdownRemark.html
                                    }}
                                />
                            ) : (
                                <p>
                                    L'ENSTA Paris est classée 2ème grande école
                                    d'ingénieur en numérique, informatique et
                                    mathématiques. (Classement Le Figaro
                                    Etudiant 2021).
                                </p>
                            )}
                        </>
                    </div>
                    <div className='p-4 flex-1 flex flex-row items-stretch space-x-4 overflow-x-visible'>
                        {consultants &&
                            consultants.map((item, i) => (
                                <ConsultantCard
                                    key={i}
                                    image={item.image}
                                    name={item.name}
                                    link={item.link}
                                />
                            ))}
                    </div>
                </div>
            </section>

            <CommentCaMarche />

            <section className='max-w-max mx-auto -mt-12'>
                <Link href={`/plaquettes/${name}.pdf`} target='_blank'>
                    <div className='mt-8 px-8 py-4 bg-yellow-300 text-blue-900'>
                        Télécharger la plaquette
                    </div>
                </Link>
            </section>

            <section className='my-24 max-w-5xl mx-auto px-6'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    Nos plus belles études
                </h2>
                <div>
                    {examples && examples.length > 0 && (
                        <Carousel>
                            {examples.map((example, i) => (
                                <CaseStudy
                                    key={i}
                                    image={example.image}
                                    title={example.title}
                                    description={example.description}
                                    tag={example.tag}
                                    link={example.link}
                                />
                            ))}
                        </Carousel>
                    )}
                </div>
            </section>

            <CTAButtons />
            <ContactForm />
            <Footer />
        </>
    )
}

export default function Expertise({ data }) {
    const {
        name,
        backgroundImage,
        header,
        subheader,
        skills,
        consultants,
        descriptionConsultant,
        examples
    } = data.expertise

    return (
        <Page
            name={name}
            backgroundImage={backgroundImage}
            header={header}
            subheader={subheader}
            skills={skills}
            examples={examples}
            descriptionConsultant={descriptionConsultant}
            consultants={consultants}
        />
    )
}

export const query = graphql`
    query ($slug: String!) {
        expertise: contentfulExpertise(name: { eq: $slug }) {
            name
            backgroundImage {
                gatsbyImageData(
                    height: 2000
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
            header
            subheader
            skills {
                title
                image {
                    gatsbyImageData(
                        width: 600
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
                description
            }
            consultants {
                image {
                    gatsbyImageData(
                        width: 600
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
                name
                link
            }
            descriptionConsultant {
                childMarkdownRemark {
                    html
                }
            }
            examples {
                title
                image {
                    gatsbyImageData(
                        width: 1000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
                description
                link
                tag
            }
        }
    }
`
