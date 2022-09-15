import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import style from '../styles/components/works.module.scss'

const Image = dynamic(() => import('next/image'))

const Works = ({worksList } : any) => {
    const [worksToMap, setWorksToMap] = useState<any[]>(worksList)

    const worksFiltered = (array : any[], type : string) => {
        const works = array?.filter((work) => {return work.workType === type})
        if(works?.length === 0) {
            setWorksToMap(array)
        } else {
            setWorksToMap(works)
        }
    }

    return(
        <>
            <section className={style.work_container}>
                <div className={style.filterBar}>
                <ul className={style.filterList}>
                    <li className={style.filterList_Item} onClick={() => {worksFiltered(worksList, 'All')}} >All</li>
                    <li className={style.filterList_Item} onClick={() => {worksFiltered(worksList, 'Branding')}} >Branding</li>
                    <li className={style.filterList_Item} onClick={() => {worksFiltered(worksList, 'Photo Manipulation')}} >Photo Manipulation</li>
                </ul>
                </div>

                <div className={style.workGrid}>
                    {worksToMap && worksToMap?.map((work : any) => (
                        <div className={style.workItem_container} key={work.id}>
                            <div className={style.workItem}>
                                <div className={style.text}>
                                    <h2>{work.title}</h2>
                                    <p>{work.subtitle}</p>
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

