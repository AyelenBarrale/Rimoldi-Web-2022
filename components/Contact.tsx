import style from '../styles/components/contact.module.scss'

const Contact: React.FC = () => {
    return(
        <>
            <section>
            <div className={style.contact_container}>
                <div className={[style.contact_item, style.item_1].join(" ")}>
                <h3 className={style.h3_text}>Dont be shy, say hi!</h3>
                <h2 className={style.h1_text}>Contact me</h2>
                <div className={style.line}></div>
                </div>
                <div className={[style.contact_item, style.item_form].join(" ")}>
                <p className={style.p_text}>To contact me for project enquiries, please fill this contact form or send me an email to info@santiagorimoldi.com</p>
                </div>
            </div>

            {/* <div>
                <form className="form">
                <div className="form-row">
                    <label for="full-name"></label>
                    <input type="name" name="name" id="full-name" required placeholder="Name">
                    <label for="email"></label>
                    <input type="email" name="email" id="email" required placeholder="Email Address">
                    <label for="subject"></label>
                    <input type="subject" name="subject" id="subject" required placeholder="Subject">
                    <label for="mensaje"></label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="8" placeholder="Message"></textarea>
                    <button type="submit" id="btnEnviar">Send</button>
            </div>
            <div>
                <p id="thanxContact"></p>
            </div> */}
            </section>
        </>
    )
}

export default Contact