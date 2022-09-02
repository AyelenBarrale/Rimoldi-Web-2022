import dynamic from 'next/dynamic'
import headerImage from '../public/assets/general/Portada_Contacto.webp'
import style from '../styles/components/pages/contact.module.scss'

const Image = dynamic(() => import('next/image'))
const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const ContactContent = dynamic(() => import('../components/Contact'))

const ContactPage: React.FC = () => {
    return(
        <div className={style.main_container} >
            <Navbar />
            <Image
                src={headerImage}
                alt='Santiago Rimoldi, graphic designer and photoshop artist'
                priority
            />
            <ContactContent />
            <Footer />
        </div>
    )
}

export default ContactPage