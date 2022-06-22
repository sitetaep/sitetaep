import * as React from 'react'
import { Layout, Footer } from '../components/layout'
import { Link } from 'gatsby'
import Card from '../components/home/Card'
import ContactForm from '../components/ContactForm'


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
            <button className='mt-8 px-8 py-4 rounded bg-yellow-300 hover:bg-yellow-500 text-blue-900'>
                Présenter mon projet
            </button>
        </Link>
    </section>
)


const DemoSection = () => (
    <section id="demosection" className='my-24 max-w-5xl mx-auto'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='text-center text-gray-400'>
            Comment ça marche?
        </h1>
        <br/>
        <br/>
        <br/>
        <div className='py-24 flex flex-col space-y-40 sm:space-y-60'>
            <Card
                number={1}
                image='/demo/altaventure.png'
                title='Votre projet'
                text='“ Dans le cadre de l’accompagnement d’un client sur un de ses projets nous avions besoin de développer un modèle  d’architecture naval  pour la consommation d’énergie. Nous avons donc fait appel au savoir-faire des élèves de l’ENSTA Paris.“'
            />
            <Card
                right
                number={2}
                image='/demo/pg.png'
                title="L'intervenant idéal"
                text='Fort d’une césure chez Naval-Group, Pierre-Gwenäel connait parfaitement la culture du maritime. Il avait donc les ressources intellectuelles et humaines pour accompagner notre client.'
            />
            <Card
                number={3}
                image='/demo/chefprojet.png'
                title='Un Chef de Projet qui vous accompagne'
                text='Le rôle de notre chef de projet est de définir à vos côtés la méthodologie projet qui vous convient le mieux. De plus, il s’assurera que notre prestation réponde à vos besoins et vos exigences. C’est votre interlocuteur privilégié.'
            />
            <Card
                right
                number={4}
                image='/demo/eric_pilat.png'
                title='Votre satisfaction'
                text='“ L’équipe de TAEP a su répondre à mon besoin. Ils ont été réactifs du début à la fin et ont fait preuve d’initiatives pour surmonter les obstacles que nous avons rencontrés.”'
            />
        </div>
    </section>
)

const DemoPage = () => {
    return (
        <Layout title="TAEP La Junior Entreprise de l'ENSTA Paris">
            <HeroSection />
            <div className='bg-white w-full'>
                <DemoSection />
                <ContactForm />
                <Footer />
            </div>
        </Layout>
    )
}

export default DemoPage
