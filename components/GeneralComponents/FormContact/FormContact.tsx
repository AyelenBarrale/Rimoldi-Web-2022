import React from "react";
import style from '/styles/components/contact.module.scss'

const FormContact: React.FC = () => {

    return(
        <>
            <form className={style.form} >
                <div className={style.form_row}>
                    <input id="name"  placeholder="Name" />
                    <input id="email"  placeholder="Email Address" />
                    <input id="subject"  placeholder="Subject" />
                    <textarea name="mensaje" id="mensaje" cols={30} rows={8} placeholder="Message" />
                    <button type="submit" value='submit' id="btnEnviar">Send</button>
                </div>
            </form>
            <div>
                <p id="thanxContact"></p>
            </div>
        </>
        
    )
}

export default FormContact