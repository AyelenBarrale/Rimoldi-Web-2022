import {useState} from 'react'
import dynamic from 'next/dynamic'
import { IWork } from '../types/IWork'
import style from '../styles/components/works.module.scss'

const Link = dynamic(() => import('next/link'))
const Image = dynamic(() => import('next/image'))

interface Props {
    works : Array<IWork>
}

const Works = ({works } : Props) => {
    const [worksToMap, setWorksToMap] = useState<Array<IWork>>(works)

    const worksFiltered = (array : Array<IWork>, type : string) => {
        const filterWorks = array?.filter((work : IWork) => {return work.workType === type})
        if(filterWorks?.length === 0) {
            setWorksToMap(array)
        } else {
            setWorksToMap(filterWorks)
        }
    }

    return(
        <>
            <section className={style.work_container}>
                <div className={style.filterBar}>
                <ul className={style.filterList}>
                    <li className={style.filterList_Item} onClick={() => {worksFiltered(works, 'All')}} >All</li>
                    <li className={style.filterList_Item} onClick={() => {worksFiltered(works, 'Branding')}} >Branding</li>
                    <li className={style.filterList_Item} onClick={() => {worksFiltered(works, 'Photo Manipulation')}} >Photo Manipulation</li>
                </ul>
                </div>

                <div className={style.workGrid}>
                    {worksToMap && worksToMap?.map((work : IWork) => (
                        <div className={style.workItem_container} key={work.id}>
                            <div className={style.workItem}>
                                <div className={style.text}>
                                    <Link href={`/works/${work.slug}`}>
                                        <a className={style.aTag}>
                                            <h2>{work.title}</h2>
                                            <p>{work.subtitle}</p>
                                        </a>
                                    </Link>
                                </div>
                                <div className={style.imageItem}>
                                    <Image
                                        src={work.previewImage}
                                        alt={work.title}
                                        layout='responsive'
                                        width={'100%'}
                                        height={'100%'}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Works

