import dynamic from 'next/dynamic'
import style from '../styles/components/pages/works.module.scss'

const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const WorksContent = dynamic(() => import('../components/Works'))

const WorksPage = () => {
    return(
        <div className={style.main_container} >
            <Navbar />
            <WorksContent />
            <Footer />
        </div>
    )
}

export default WorksPage