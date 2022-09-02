import dynamic from 'next/dynamic'
import headerImage from '../public/assets/general/Portada_About_Rimoldi_Design.webp'
import style from '../styles/components/pages/about.module.scss'

const Image = dynamic(() => import('next/image'))
const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const AboutContent = dynamic(() => import('../components/About'))

const AboutPage: React.FC = () => {
    return(
        <div className={style.main_container} >
            <Navbar />
            <Image
                src={headerImage}
                alt='Santiago Rimoldi, graphic designer and photoshop artist'
                priority
            />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default AboutPage