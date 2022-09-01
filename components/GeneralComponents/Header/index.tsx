import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../Navbar'))
const Slider = dynamic(() => import('../Slider'))

const Header: React.FC = () => {
    return(
        <header>
            <Navbar />
            <Slider />
        </header>
    )
}

export default Header