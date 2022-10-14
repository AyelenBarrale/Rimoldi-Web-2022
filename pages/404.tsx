/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic'
import style from '../styles/components/pages/404.module.scss'
const Link = dynamic(() => import('next/link'))

const Head = dynamic(() => import('../components/GeneralComponents/Head/index'))
const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))


export default function Home() {
  return (
    <>
      <Head 
        title="404 Error | Rimoldi. Graphic Design"
				description="Sorry. This page doesn't exist"
      />
      <Navbar />
      <div className={style.errorPage_container}>
        <h1>Sorry, this page doesn't exist yet</h1>
        <Link href="/" passHref>
            <a className={style.button} >
                Back to home
            </a>
        </Link>
        
      </div>
      <Footer />
    </>

  )
}
