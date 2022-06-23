import * as React from 'react'
import { Layout } from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const HeroSection = () => (
    <section className='text-center flex flex-col sm:space-y-12 items-center px-4 py-12 sm:p-20 max-w-5xl mx-auto'>
        <div className='hidden md:block'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <h1 className='text-white tracking-wide text-shadow'>
            L’Excellence Académique d’ENSTA Paris à votre service !
        </h1>
        <div className='block sm:hidden'>
            <br/>
        </div>
        <p className='text-xl text-white text-shadow font-semibold'>
            Un réseau de +300 étudiants brillants et dynamiques pour vous
            accompagner dans tous vos projets en lien avec l'ingénierie.
        </p>
        <div className='block sm:hidden'>
            <br/>
        </div>
        <Link to='/contact'>
            <button className='mt-8 px-8 py-4 rounded bg-yellow-300 hover:bg-yellow-500 text-blue-900'>
                Présenter mon projet
            </button>
        </Link>
    </section>
)

const DescriptionSection = () => (
    <section id="enstasection" className='p-4 sm:p-12 text-left flex flex-col space-y-4 max-w-5xl mx-auto'>
        <br/>
        <a href="https://www.ensta-paris.fr/">
        <div className='flex justify-center hover:shadow-2xl'>
            <StaticImage
                src='../images/logo_ENSTA.png'
                alt='ENSTA Paris'
                placeholder='blurred'
                
            />
        </div>
        </a>
        <br/>
        <br/>
        <p>Fondée en 1741 afin de former des ingénieurs-constructeurs de marine, l’école a depuis étendu ses champs de compétence et occupe aujourd’hui une place de premier plan dans le paysage français de l’enseignement supérieur et de la recherche.<br/><br/>
            ENSTA Paris est une école d’ingénieurs pluridisciplinaire qui propose une formation d’excellence. Elle fait partie, au côté de quatre autres grandes écoles d’ingénieur, de l'Institut Polytechnique de Paris, institution d’enseignement et de recherche de premier rang en France et à l'international.<br/><br/>
            Sous la tutelle du ministère des armées, ENSTA Paris délivre une formation pluridisciplinaire, qui permet à ses diplômés d’exercer dans de nombreux secteurs d’activité correspondant à ses domaines d’excellence, comme  les transports automobile, ferroviaire ou navale, les énergies, la robotique, l'ingénierie mathématique, le numérique ; des secteurs et des domaines en phase avec les besoins des grandes entreprises.<br/><br/>
            ENSTA Paris est située à Palaiseau au cœur d’un campus composé de nombreux établissements et institutions scientifiques.<br/><br/>
            La recherche fait partie des grandes missions de l’École. Elle est réalisée, pour moitié, par les enseignants-chercheurs de l’École et pour l’autre moitié, par des chercheurs du CNRS, de l’INRIA et de l’École polytechnique travaillant dans les locaux d'ENSTA Paris. L’École compte six unités de recherche.<br/><br/><br/><br/>
        </p>
        <h2> La raison d’être de l’ENSTA Paris</h2>
        <p>
            "Éclairer, inventer et former à une ingénierie fondée sur l’excellence scientifique et technique augmentée par le numérique, pour accompagner les transformations des grands secteurs stratégiques, à la croisée des enjeux de souveraineté et des attentes fondamentales de la société" telle est la raison d'être qui nous anime.<br/><br/><br/><br/>
        </p>
        <h2>Le palmarès de l’ENSTA Paris</h2>
        <p>Régulièrement plébiscitée par la presse, ENSTA Paris se distingue dans plusieurs palmarès et classements nationaux. Depuis 2020, elle s'associe aux côtés des écoles membres de l'Institut Polytechnique de Paris pour figurer dans les classements internationaux.<br/><br/>  
            <ul class="list-disc list-inside" >
                <li>Palmarès 2022 L’Etudiant : 7ème au classement général</li>
                <li>Palmarès 2022 Figaro Étudiant : 7e place des écoles d'ingénieurs d'excellence</li>
                <li>Classement EDUNIVERSAL : 8e place pour la formation d'ingénieur de l'ENSTA Paris</li>
                <li>QS World University Rankings 2022 : 49e place du classement général pour l'Institut Polytechnique de Paris</li>
                <li>QS Graduate Employability Rankings 2022 : 1er en France</li>
            </ul>
        </p>
    </section>
)

const EnstaPage = () => {
    return (
        <Layout title="TAEP La Junior Entreprise de l'ENSTA Paris">
            <HeroSection />
            <div className='bg-white w-full'>
                <DescriptionSection />
            </div>
        </Layout>
    )
}

export default EnstaPage
