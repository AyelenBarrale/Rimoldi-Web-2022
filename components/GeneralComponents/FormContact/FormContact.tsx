import React from "react";
import { useForm } from "react-hook-form";
import style from '/styles/components/contact.module.scss'

const FormContact: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data : any) => console.log(data)

    console.log(watch("name"))
    return(
        <>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)} >
                <div className={style.form_row}>
                    <input id="name"  placeholder="Name" {...register("name", { required: true })} />
                    <input id="email"  placeholder="Email Address" {...register("email", { required: true })}/>
                    <input id="subject"  placeholder="Subject" {...register("subject", { required: true })}/>
                    <textarea name="mensaje" id="mensaje" cols={30} rows={8} placeholder="Message" />
                    <button type="submit" value='submit' id="btnEnviar">Send</button>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
            <div>
                <p id="thanxContact"></p>
            </div>
        </>
        
    )
}

export default FormContact