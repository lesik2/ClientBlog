'use client';

import style from '@styles/contactPage/form.module.scss';
import inputStyle from '@styles/ui/contactInput.module.scss';
import buttonStyle from '@styles/ui/button.module.scss';
import { useState } from 'react';
import { DropDown } from '@components/ui/DropDown';
import { useForm, SubmitHandler } from 'react-hook-form';
import {UserRegularExpression} from '@validation/user';

export type TMessageEmail = {
  fullName: string;
  email: string;
  message: string;

}
export default function Form() {
  const [selectValue, setSelectValue] = useState('Query Related');
  const {
    register,
    handleSubmit,
    formState: {isValid,errors },
    reset,
  } = useForm<TMessageEmail>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TMessageEmail> = async (data) => {
    alert(data);
    reset();

    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className={style.formWrapper}>

        <div className={inputStyle.inputWrapper}>
          <input 
          className={inputStyle.contactInput} 
          placeholder='Full Name'
          {...register('fullName', { required: true, pattern:{
            value:UserRegularExpression.fullName,
            message: 'Invalid input. Please enter letters or(and) spaces.'
          } })}
          />
          {errors.fullName && <p className={inputStyle.errorMessage}>{errors.fullName.message}</p>}
      </div>
      <div className={inputStyle.inputWrapper}>
        <input 
        className={inputStyle.contactInput} 
        placeholder='Your Email'
        {...register('email', { required: true,pattern:
          {
            value:UserRegularExpression.email,
            message: 'Invalid email address.'
          
          } })}
        />
        {errors.email && <p className={inputStyle.errorMessage}>{errors.email.message}</p>}
          
      </div>
      <DropDown value={selectValue} setValue={setSelectValue}/>
      <div className={inputStyle.inputWrapper}>
        <textarea 
        className={`${inputStyle.contactInput} ${inputStyle.contactTextArea}`} 
        placeholder='Message'
        {...register('message', { required: true, minLength: {
          value: 10,
          message: 'Your message should include at least 10 symbols.'
        } })}
        />
        {errors.message && <p className={inputStyle.errorMessage}>{errors.message.message}</p>}
      </div>
      <button type='submit' className={buttonStyle.formPrimary} disabled={!isValid}>
        Send Message
      </button>
    </form>
  )
}
