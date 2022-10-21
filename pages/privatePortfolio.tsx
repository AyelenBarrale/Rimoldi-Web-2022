import dynamic from 'next/dynamic'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import style from '../styles/components/pages/portfolio.module.scss'
interface Props {
	portfolio: any[]
}

// const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))

const PrivatePorfolio = ({portfolio } : Props) => {
    const portfolioFile = portfolio[0].portfolioUrl

    return(
        <div className={style.main_container}>
            {/* <Navbar /> */}
            <div className={style.pdf_container}>
                <iframe 
                    src={portfolioFile} 
                    title={'Rimoldi`s Portfolio'} 
                    allowFullScreen
                    className={style.iframe}
                ></iframe>
            </div>  
            <Footer />
        </div>
    )
}

export default PrivatePorfolio

interface StaticProps {
	props: Props,
	revalidate: number
}

export const getStaticProps : GetStaticProps = async (): Promise<StaticProps>  => {  
    const portfolio : any[] = []
    try {
        const docRef = query(collection(db, 'portfolio'))
        const docSnap = await getDocs(docRef)
        docSnap.forEach((doc) => {
            portfolio.push({
                id: doc.id,
                ...doc.data()
            })
        })
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            portfolio
        },
        revalidate: 1
    }
}