import * as React from 'react'
import { Layout } from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql} from 'gatsby'
import AdministrateurCard from './AdministrateurCard'
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

const EquipeSection = ({image}) => {
    
    return (

        <section id="equipesection" className='text-center flex flex-col space-y-12 items-center px-4 py-12 sm:p-20 max-w-5xl mx-auto'>
            <h1>Notre Equipe</h1>
            <h2>Présidence</h2>
            <p>
            Le Président est chargé de coordonner et de diriger l’ensemble des actions réalisées au cœur de la Junior-Entreprise. Il conduit la stratégie mais aussi les relations extérieures : c’est l’interlocuteur privilégié auprès de nos partenaires mais aussi auprès de la Confédération Nationale des Junior-Entreprises (CNJE).
            Le vice-président épaule le président dans l’ensemble de ces tâches et s’assure de la bonne gestion de l’équipe. Il est aussi responsable de la qualité. 
            </p>
            <div className='text-center'>
            <AdministrateurCard
                link="https://www.linkedin.com/in/alexis-rusalem-a93618173/"
                name="Alexis Rusalem"
                role="Président"
                image={image}
            />
            </div>
            <h2>Pôle Trésorerie</h2>
            <p>
            Le pôle Trésorerie est responsable de la gestion financière et comptable de TAEP. Il gère le budget afin d’appliquer au mieux la stratégie de notre Junior-Entreprise. Il est également responsable des déclaratifs fiscaux et sociaux ainsi que de l’analyse financière.
            </p>
            <h2>Pôle Qualité</h2>
            <p>
            Le pôle Qualité est au cœur de l’activité de TAEP : il s’assure de la qualité des études mais aussi de la qualité de nos activités transverses comme le développement commercial et la communication. Cela comprend notamment le respect du cadre légal et de la déontologie des études. Il détient aussi un rôle stratégique au sein de la Junior-Entreprise, en garantissant l’amélioration continue de la structure grâce au contrôle des performances de chaque pôle.
            </p>
            <h2>Pôle Suivi d'études</h2>
            <p>
            Ce pôle est composé de nos Chargé(e)s de suivi qui réalisent un suivi de projet de qualité lors de toutes nos études en s’assurant notamment que les méthodes les plus adaptées aux besoins de nos clients sont mises en place. Ils s’assurent de la compréhension du besoin jusqu’à la bonne remise du livrable. Ce suivi personnalisé garantit à nos clients une satisfaction maximale ! 
            </p>
            <h2>Pôle Développement Commercial</h2>
            <p>
            Le pôle Développement Commercial travaille sur la définition et la promotion des offres de prestation de TAEP. Il propose à nos clients le meilleur des compétences de nos intervenants. Composé des Chargé(e)s de développement commercial, ils gèrent d’un point de vue général la réponse aux appels d’offre ainsi que les activités de prospection.
            </p>
        </section>
    )
}

const PartenaireWall = () => (
    <section className='p-4 sm:p-12 text-center flex flex-col space-y-4 max-w-5xl mx-auto'>
        <h2 className='my-8 text-gray-400'>
            Nos partenaires
        </h2>
        <div className='w-full'>
            <StaticImage
                src='../images/partenaires.png'
                alt='Partenaires'
                placeholder='blurred'
            />
        </div>
    </section>
)

const EquipePage = ({data}) => {
    const image = data.administrateur.image
    return (
        <Layout  title="TAEP La Junior Entreprise de l'ENSTA Paris">
            <HeroSection />
            <div className='bg-white w-full'>
                <EquipeSection image={image} />
                <PartenaireWall />
            </div>
           
        </Layout>
    )
}

export default EquipePage

export const query = graphql`
    query {
        administrateur: contentfulAdministrateur(name: { eq: "Alexis Rusalem" }) {
            image {
                gatsbyImageData(
                    width: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
        }
    }
`