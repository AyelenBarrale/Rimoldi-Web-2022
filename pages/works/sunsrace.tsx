import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { IWork } from '../../types/IWork'
import style from '../../styles/components/pages/works/sunsrace.module.scss'

const Navbar = dynamic(() => import('../../components/GeneralComponents/Navbar/index'))
const Footer = dynamic(() => import('../../components/GeneralComponents/Footer/index'))
const Intro = dynamic(() => import('../../components/GeneralComponents/IntroWork/index'))
interface Props {
	works: IWork[]
}

const Sunsrace = ({works} : Props) => {

    const worksArray = works
    const workFilter = worksArray.filter(item => item.slug === 'sunsrace')
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
            <div className={style.sunsrace_container}>
                <div className={style.images_container}>
                    <Image
                        src={work.detailImageI}
                        alt={''}
                        aria-hidden='true'
                        layout="responsive"
                        height='904'
                        width='1357'
                    />
                    <Image
                        src={work.detailImageII}
                        alt={''}
                        aria-hidden='true'
                        layout="responsive"
                        height='904'
                        width='1357'
                    />
                    <div className={style.images_detail}>
                        <div className={style.video_container}>
                            <video
                                loop
                                autoPlay
                                controls
                                poster={work.videoUrl}
                            >
                                <source src={work.videoUrl} typeof="video/mp4"/>
                            </video>
                        </div>
                        <div>
                            <Image
                                src={work.detailImageIII}
                                alt={''}
                                aria-hidden='true'
                                layout="responsive"
                                height='1680'
                                width='1200'
                            />
                        </div>
                    </div>
                    <div className={style.iframe_container}>
                        <iframe className={style.responsive_iframe} title="image_process" src="https://player.vimeo.com/video/254495842" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sunsrace

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