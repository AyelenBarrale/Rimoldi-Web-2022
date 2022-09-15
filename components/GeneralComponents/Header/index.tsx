import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../Navbar'))
const Carousel = dynamic(() => import('../Carousel/index'))

const images = ['Lighthouse_Slider.webp', 'Mut_Slider.webp', 'Suns_Race_Slider.webp']

const Header = () => {
    return(
        <header>
            <Navbar />
            <Carousel images={images} autoPlay={true} />
        </header>
    )
}

export default Header