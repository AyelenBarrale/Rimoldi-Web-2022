import dynamic from 'next/dynamic'
import style from '../styles/components/pages/home.module.scss'

const Head = dynamic(() => import('../components/GeneralComponents/Head/index'))
const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const About = dynamic(() => import('../components/About'))
const Works = dynamic(() => import('../components/Works'))

export default function Home() {
  return (
    <div className={style.general_container} >
      <Head 
        title="Portfolio"
				description="Graphic design portfolio where you can check out Santiago's latest works and works in progress. This portfolio specializes in photo manipulation and branding."
      />
      <Navbar />
      <About />
      <Works />
      <Footer />
    </div>

  )
}
