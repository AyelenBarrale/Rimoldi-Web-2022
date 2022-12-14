import dynamic from 'next/dynamic'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import { IWork } from '../types/IWork'
import style from '../styles/components/pages/home.module.scss'

const Head = dynamic(() => import('../components/GeneralComponents/Head/index'))
const Header = dynamic(() => import('../components/GeneralComponents/Header/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const About = dynamic(() => import('../components/About'))
const Works = dynamic(() => import('../components/Works'))
const Contact = dynamic(() => import('../components/Contact'))

interface Props {
	works: IWork[]
}

export default function Home({works } : Props) {
  return (
    <div className={style.general_container} >
      <Head 
        title="Portfolio"
				description="Graphic design portfolio where you can check out Santiago's latest works and works in progress. This portfolio specializes in photo manipulation and branding."
      />
      <Header />
      <About />
      <Works works={works} />
      <Contact />
      <Footer />
    </div>

  )
}
interface StaticProps {
	props: Props,
	revalidate: number
}

export const getStaticProps : GetStaticProps = async (): Promise<StaticProps>  => {  
  const works : any[] = []  
  try {
      const docRef = query(collection(db, 'works'))
      const docSnap = await getDocs(docRef)
      docSnap.forEach((doc) => {
          works.push({
              id: doc.id,
              ...doc.data()
          })
      })
  } catch (error) {
      console.log(error)
  }

  return {
      props: {
          works
      },
      revalidate: 1
  }
}