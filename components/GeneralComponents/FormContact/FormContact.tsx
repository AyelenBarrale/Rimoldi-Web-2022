import React from 'react';
import style from '/styles/components/contact.module.scss'

const FormContact: React.FC = () => {

    return(
        <>
            <form className={style.form} >
                <div className={style.form_row}>
                    <input className={style.inputName}  placeholder='Name' />
                    <input className={style.inputEmail}  placeholder='Email Address' />
                    <input className={style.inputSubject}  placeholder='Subject' />
                    <textarea className={style.txtMessage} cols={30} rows={8} placeholder='Message' />
                    <button type='submit' value='submit' className={style.btnContact}>Send</button>
                </div>
            </form>
            <div>
                <p id='thanxContact'></p>
            </div>
        </>
        
    )
}

export default FormContact