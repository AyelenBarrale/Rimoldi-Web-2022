import { useState } from 'react'
import style from '/styles/components/contact.module.scss'

const FormContact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [clicked, setClicked] = useState(false)

    const handleSubmit = () => {
        setClicked(true)
        console.log(data)
    }

    return(
        <>
            <form className={style.form} >
                <div className={style.form_row}>
                    <input className={style.inputName} required placeholder='Name' onChange={(value: any) => setData({...data, name : value.target.value})}/>
                    <input className={style.inputEmail} required placeholder='Email Address' onChange={(value: any) => setData({...data, email : value.target.value})}/>
                    <input className={style.inputSubject} required placeholder='Subject' />
                    <textarea className={style.txtMessage} cols={30} rows={8} placeholder='Message' onChange={(value: any) => setData({...data, message : value.target.value})}/>
                    <button type='submit' value='submit' className={style.btnContact} onClick={handleSubmit} >Send</button>
                </div>
            </form>
            <div>
                {clicked && <p>{`Thanks, your message was send. I'll contact you soon!`}</p>
                }
                <p id='thanxContact'></p>
            </div>
        </>
        
    )
}

export default FormContact