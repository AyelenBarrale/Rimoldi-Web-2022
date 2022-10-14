import dynamic from 'next/dynamic'
import style from '../../styles/components/pages/works/vineyard.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))

const Vineyard = () => {

    return(
        <div className={style.main_container} >
            <Navbar />
            <Footer />
        </div>
    )
}

export default Vineyard