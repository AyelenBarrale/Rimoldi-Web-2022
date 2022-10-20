import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { IWork } from '../../types/IWork'
import style from '../../styles/components/pages/works/mut.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))
const Intro = dynamic(() => import('../../components/GeneralComponents/IntroWork/index'))
interface Props {
	works: IWork[]
}

const Mut = ({works} : Props) => {
    const worksArray = works
    const workFilter = worksArray.filter(item => item.slug === 'mut')
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
            <div className={style.mut_container}>
                <div className={style.images_container}>
                    <Image
                        src={work.detailImageI}
                        alt={'Final product about this photo manipulation'}
                        layout="responsive"
                        height='885'
                        width='610'
                    />
                    <Image
                        src={work.detailImageII}
                        alt={'Final product about this photo manipulation'}
                        layout="responsive"
                        height='885'
                        width='460'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mut

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