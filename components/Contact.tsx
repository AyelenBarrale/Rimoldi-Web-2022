import FormContact from './GeneralComponents/FormContact/FormContact'
import style from '../styles/components/contact.module.scss'

const Contact: React.FC = () => {
    return(
        <>
            <section>
            <div className={style.contact_container}>
                <div className={[style.contact_item, style.item_1].join(" ")}>
                    <h3 className={style.h3_text}>Don't be shy, say hi!</h3>
                    <h2 className={style.h1_text}>Contact me</h2>
                    <div className={style.line}></div>
                </div>
                <div className={[style.contact_item, style.item_form].join(" ")}>
                    <span className={style.p_text}>To contact me for project enquiries, please fill this contact form or send me an email to <a href="mailto: [santi.rimoldi@gmail.com]?subject=contact-from-website" className={style.p_text_mail} > <span>info@santiagorimoldi.com</span> </a></span>
                    <FormContact />
                </div>
            </div>
            </section>
        </>
    )
}

export default Contact