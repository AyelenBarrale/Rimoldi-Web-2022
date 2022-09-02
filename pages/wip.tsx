import dynamic from 'next/dynamic'
import headerImage from '../public/assets/general/Portada_Wip.webp'
import style from '../styles/components/pages/wip.module.scss'

const Image = dynamic(() => import('next/image'))
const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const VideoSection = dynamic(() => import('../components/Utils/videoSection'))

const WipPage: React.FC = () => {
    return(
        <div className={style.main_container} >
            <Navbar />
            <Image
                src={headerImage}
                alt='Santiago Rimoldi, graphic designer and photoshop artist'
                priority
            />
            <VideoSection />
            <Footer />
        </div>
    )
}

export default WipPage