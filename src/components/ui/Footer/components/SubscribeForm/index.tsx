'use client';

import style from '@styles/ui/footer.module.scss';
import button from '@styles/ui/button.module.scss';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import {Email, emailSchema} from '@validation/email'
import emailjs from '@emailjs/browser';
import { InfinityLoader } from '@components/InfinityLoader';
import { SnackBar } from '@components/SnackBar';

export interface ISubscribeForm{
  placeholder: string;
  btnText: string;
}
export default function SubscribeForm({placeholder, btnText}: ISubscribeForm) {
  const [emailValue, setEmailValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<Error|null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const form = useRef<HTMLFormElement| null>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailData: Email = {
      email: emailValue,
    }

    try{
      await emailSchema.validate(emailData)
      setLoading(true);
      if(form.current === null) return;
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID??'',
        process.env.NEXT_PUBLIC_TEMPLATE_ID??'',
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
      .then((result) => {
          if(result.status === 200){
            setSuccess(`We have received you email: ${emailData.email}`)
            setEmailValue('');
          }
      })
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false))
    }catch(error){
      if(error instanceof Error){
        console.error(error);
        setEmailValue('');
        setErrorMessage(error);
      }

    }
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.currentTarget.value);
    if(errorMessage){
      setErrorMessage(null);
    }
  }

  return (
    <form ref={form} className={style.submitForm} onSubmit={sendEmail} autoComplete='off'>
      <div className={style.inputWrapper}>
      <input 
        name="user_email" 
        value={emailValue} 
        placeholder={placeholder} 
        className={style.input} 
        onChange={handleInput} 
      />
      {errorMessage && <p className={style.errorMessage}>{errorMessage.message}</p>}
      </div>
      <div className={style.btnWrapper}>
        <button className={button.primary} type='submit' disabled={loading}>
          {btnText}
        </button>
        {loading && <div className={style.loader}><InfinityLoader /></div>}
      </div>  
      {success && <SnackBar message={success}/>}    
    </form>
  )
}
