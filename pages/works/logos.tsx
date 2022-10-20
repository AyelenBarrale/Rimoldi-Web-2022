import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { IWork } from '../../types/IWork'
import style from '../../styles/components/pages/works/logos.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))
const Intro = dynamic(() => import('../../components/GeneralComponents/IntroWork/index'))
interface Props {
	works: IWork[]
}

const Logos = ({works} : Props) => {
    const worksArray = works
    const workFilter = worksArray.filter(item => item.slug === 'logos')
    const work = workFilter[0]
    const logos = work?.logos

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
            <div className={style.logos_container}>
                <div className={style.images_container}>
                    {logos?.map((logo : string) => {
                            return (
                                <div key={logo}>
                                    <Image
                                        src={logo}
                                        alt={'Final product about this photo manipulation'}
                                        layout="responsive"
                                        height='350'
                                        width='1300'
                                    />
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Logos

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