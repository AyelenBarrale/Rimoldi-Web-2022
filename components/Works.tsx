import dynamic from 'next/dynamic'
import style from '../styles/components/works.module.scss'

const Image = dynamic(() => import('next/image'))

const Works = ({worksList } : any) => {
    console.log(worksList)
    return(
        <>
            <section className={style.work_container}>
                <div className={style.filterBar}>
                <ul className={style.filterList}>
                    <li className={style.filterList_Item} >All</li>
                    <li className={style.filterList_Item} >Branding</li>
                    <li className={style.filterList_Item} >Photo Manipulation</li>
                </ul>
                </div>
                <div className={style.workGrid}>
                    {worksList && worksList?.map((work : any) => (
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

