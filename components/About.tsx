import style from '../styles/components/about.module.scss'

const About: React.FC = () => {
    return(
        <>
             <section className={style.about_container}>
                <div className={[style.about_item, style.item_1].join(" ")}>
                    <h3 className={style.ab_h3_text}>About</h3>
                    <h1 className={style.h1_text}>Santiago Rimoldi</h1>
                    <div className={style.line}></div>
                </div>
                <div className={[style.about_item, style.item_description].join(" ")}>
                    <p className={style.p_text}>Undergraduate in Graphic Design in 2013, Santiago has plenty of experience in several areas of computer graphics, accumulating functions in motion graphics, graphic design or post-production. 
                    <br></br>With 10 years of experience in the design area, he has also worked both independently, as well as in collaboration with other studios creating the post-production of images for the archviz and aircraft market, all around the world.</p>
                </div>
            </section>
        </>
    )
}

export default About