import * as React from 'react'
import { Layout, Footer } from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import ContactForm from '../components/ContactForm'
import Card from '../components/home/Card'


const AvantageSection = () => (
    <section className='my-24 max-w-5xl mx-auto'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className='text-center text-gray-400'>
            Qu'est-ce que TAEP ?
        </h2>
        <br/>
        <div class="flex flex-col sm:flex-row">
            <StaticImage
                src='../images/taep.png'
                alt='TAEP'
                placeholder='blurred'
                class="mx-10"
            />
            <p class="mx-10">
                Techniques Avancées Etudes et Projets (TAEP) est la Junior-Entreprise d'ENSTA Paris : au sein d’une Junior-Entreprise, des étudiants motivés et dynamiques réalisent des missions pour des professionnels dans le but de mettre en application les enseignements théoriques dispensés dans leur école. Notre statut d’association étudiante de loi 1901 nous permet en outre de pratiquer des tarifs très intéressants pour nos missions.
            </p>
        </div>
        <br/>
        <br/>
        <br/>
        <h2 className='text-center text-gray-400'>
            Pourquoi choisir la Junior-Entreprise TAEP?
        </h2>
        <br/>
        <br/>
        <br/>
        <div className='py-24 flex flex-col space-y-40 sm:space-y-60'>
            <Card
                number={1}
                image='/avantage/excellence.png'
                title="L'Excellence Académique"
                text="Régulièrement plébiscitée par la presse, ENSTA Paris se distingue dans plusieurs palmarès et classements nationaux. Depuis 2020, elle s'associe aux côtés des écoles membres de l'Institut Polytechnique de Paris pour figurer dans les classements internationaux."
            />
            <Card
                right
                number={2}
                image='/avantage/experience.png'
                title="40 ans d'expérience"
                text="Forts de 40 ans d'expérience et de plus de 800 études à notre actif TAEP est à même de vous fournir le meilleur accompagnement possible dans vos projets !"
            />
            <Card
                number={3}
                image='/avantage/rse.png'
                title="Engagement et démarche RSE"
                text="Les élèves d'ENSTA Paris sont formés aux enjeux climatiques.
                Ils ont notamment pu participer à des fresques du climat et des conférences d'experts sur le sujet en plus des formations sur les cycles de vie et les bilans carbone que l'école dispense.
                Les administrateurs de TAEP ont aussi décidé de s'inscire dans la démarche RSE à plus grande échelle en participant à la COP RSE avec d'autres Junior-Entreprises."
            />
        </div>
    </section>
)

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
        <h1 className='text-white'>
            L’Excellence Académique de l’ENSTA Paris à votre service!
        </h1>
        <div className='block sm:hidden'>
            <br/>
        </div>
        <p className='text-xl text-white'>
            Un réseau de +300 étudiants brillants et dynamiques pour vous
            accompagner dans tous vos projets en lien avec l'ingénierie.
        </p>
        <div className='block sm:hidden'>
            <br/>
        </div>
        <Link to='/contact'>
            <button className='mt-8 px-8 py-4 rounded bg-yellow-300 text-blue-900'>
                Présenter mon projet
            </button>
        </Link>
    </section>
)

const BrandWall = () => (
    <section className='p-4 sm:p-12 text-center flex flex-col space-y-4 max-w-5xl mx-auto'>
        <h2 className='my-8 text-gray-400'>
            Les entreprises que nous avons déjà accompagnées
        </h2>
        <div className='w-full'>
            <StaticImage
                src='../images/brand_wall.png'
                alt='Entreprises'
                placeholder='blurred'
            />
        </div>
    </section>
)




const IndexPage = () => {
    return (
        <Layout title="TAEP La Junior Entreprise de l'ENSTA Paris">
            <HeroSection />
            <div className='bg-white w-full'>
                <AvantageSection />
                <BrandWall />
                <ContactForm />
                <Footer />
            </div>
        </Layout>
    )
}

export default IndexPage
