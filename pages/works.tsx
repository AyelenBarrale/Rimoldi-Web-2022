import dynamic from 'next/dynamic'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import { IWork } from '../types/IWork'
import style from '../styles/components/pages/works.module.scss'

const Navbar = dynamic(() => import('../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../components/GeneralComponents/Footer/index'))
const WorksContent = dynamic(() => import('../components/Works'))

interface Props {
	works: IWork[]
}

const WorksPage = ({works } : Props) => {
    return(
        <div className={style.main_container} >
            <Navbar />
            <WorksContent works={works} />
            <Footer />
        </div>
    )
}

export default WorksPage

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