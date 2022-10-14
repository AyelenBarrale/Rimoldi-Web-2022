import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { IWork } from '../../types/IWork'
import style from '../../styles/components/pages/works/forest.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))
const Intro = dynamic(() => import('../../components/GeneralComponents/IntroWork/index'))


interface Props {
	works: IWork[]
}

const Forest = ({works} : Props) => {

    const worksArray = works
    const workFilter = worksArray.filter(item => item.slug === 'forest')
    const work = workFilter[0]

    return(
        <div className={style.main_container} >
            <Navbar />
            <Intro work={work} />
            <div className={style.forest_container}>
                <div className={style.iamge_container}>
                    <Image
                        src={work.imageFull}
                        alt={'Final product about this photo manipulation'}
                        layout="responsive"
                        height='100hv'
                        width='100vw'
                    />
                </div>
                {/* <img src="./../../img/03 - Forest/03_Forest_Full.jpg" alt="Final product about this photo manipulation">
                </div>
                <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="w-100" src="./../../img/03 - Forest/03_Forest_Detail_01.jpg" alt="detail of girl montage">
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="w-100" src="./../../img/03 - Forest/03_Forest_Detail_02.jpg" alt="detail of bear montage">
                </div>
                </div>
                <div>
                    <img src="./../../img/03 - Forest/03_Forest_Resources.jpg" alt="resources used on this forest photo manipulation">
                </div> */}
                {/* <div className="video_container">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/281368495" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Forest

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