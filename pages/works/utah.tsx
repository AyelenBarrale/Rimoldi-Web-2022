import dynamic from 'next/dynamic'
import style from '../../styles/components/pages/works/utah.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))

const Utah = () => {

    return(
        <div className={style.main_container} >
            <Navbar />
            <Footer />
        </div>
    )
}

export default Utah