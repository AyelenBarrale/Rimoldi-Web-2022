import dynamic from 'next/dynamic'
import style from '../styles/components/pages/home.module.scss'

const Head = dynamic(() => import('../components/GeneralComponents/Head/index'))
const Header = dynamic(() => import('../components/GeneralComponents/Header/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const About = dynamic(() => import('../components/About'))
const Works = dynamic(() => import('../components/Works'))
const Contact = dynamic(() => import('../components/Contact'))

export default function Home() {
  return (
    <div className={style.general_container} >
      <Head 
        title="Portfolio"
				description="Graphic design portfolio where you can check out Santiago's latest works and works in progress. This portfolio specializes in photo manipulation and branding."
      />
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>

  )
}
