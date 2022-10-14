import { IWork } from '../../../types/IWork'
import style from '../../../styles/components/generalComponents/introwork.module.scss'

const IntroWork = ({work} : {work :IWork}) => {

    console.log(work)

    return(
        <section className={style.intro_container}>
            <div className={style.intro_left}>
                <div className={style.intro_title}>
                    <h1 className={style.intro_h1}>{work.title}</h1>
                    <h2 className={style.intro_h2}>{work.type}</h2>
                    <div className={style.line}></div>
                </div>
                
                <div className={style.details_work}>
                    <div className={style.row}>
                        <h3 className={style.details_1}>Client</h3>
                        <h3 className={style.details_2}>{work.client}</h3>
                    </div>
                    <div className={style.row}>
                        <h3 className={style.details_1}>Services</h3>
                        <h3 className={style.details_2}>{work.services}</h3>
                    </div>
                    <div className={style.row}>
                        <h3 className={style.details_1}>Year</h3>
                        <h3 className={style.details_2}>{work.year}</h3>
                    </div>
                </div>
            </div>

            <div className={style.intro_right}>
                <p className={style.intro_p}>{work.description}
                </p>
            </div>
        </section>
    )
}

export default IntroWork