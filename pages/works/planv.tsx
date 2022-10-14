import dynamic from 'next/dynamic'
import style from '../../styles/components/pages/works/planv.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))

const Planv = () => {

    return(
        <div className={style.main_container} >
            <Navbar />
            <Footer />
        </div>
    )
}

export default Planv