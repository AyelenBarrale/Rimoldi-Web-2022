import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { IWork } from '../../types/IWork'
import style from '../../styles/components/pages/works/planv.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))
const Intro = dynamic(() => import('../../components/GeneralComponents/IntroWork/index'))
interface Props {
	works: IWork[]
}

const Planv = ({works} : Props) => {
    const worksArray = works
    const workFilter = worksArray.filter(item => item.slug === 'planv')
    const work = workFilter[0]

    return(
        <div className={style.main_container} >
            <Navbar />
            <div className={style.topimage_container}>
                <Image
                    src={work.imageTop}
                    alt='Santiago Rimoldi, graphic designer and photoshop artist'
                    layout="responsive"
                    height="675"
                    width="2500"
                />
            </div>
            <Intro work={work} />
            <div className={style.planv_container}>
                <div className={style.images_container}>
                    <Image
                        src={work.detailImageI}
                        alt={'Detail image about this branding design'}
                        layout="responsive"
                        height='3500'
                        width='1400'
                    />
                    <Image
                        src={work.detailImageII}
                        alt={'Detail image about this branding design'}
                        layout="responsive"
                        height='885'
                        width='850'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Planv

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