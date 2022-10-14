import style from '../../../styles/components/generalComponents/introwork.module.scss'

const IntroWork = () => {

    return(
        <section className={style.intro_container}>
            <div className={style.intro_left}>
                <div className={style.intro_title}>
                    <h1 className={style.intro_h1}>Forest Encounter</h1>
                    <h2 className={style.intro_h2}>Photo manipulation</h2>
                    <div className={style.line}></div>
                </div>
                
                <div className={style.details_work}>
                    <div className={style.row}>
                        <h3 className={style.details_1}>Client</h3>
                        <h3 className={style.details_2}>Personal</h3>
                    </div>
                    <div className={style.row}>
                        <h3 className={style.details_1}>Services</h3>
                        <h3 className={style.details_2}>Photo Manipulation</h3>
                    </div>
                    <div className={style.row}>
                        <h3 className={style.details_1}>Year</h3>
                        <h3 className={style.details_2}>2018</h3>
                    </div>
                </div>
            </div>

            <div className={style.intro_right}>
                <p className={style.intro_p}>Personal photo manipulation project.
                    <br></br>Browsing pictures on Unsplash, I was caught by the photograph of a woman. What was she looking at?
                    <br></br>That was the trigger to create this encounter with mother nature in which time seems to stop between both glances.
                </p>
            </div>
        </section>
    )
}

export default IntroWork