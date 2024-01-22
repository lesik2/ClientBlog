'use client';


import buttonStyle from '@styles/ui/button.module.scss';
import { useState } from 'react';
import { DropDown } from '@components/ui/DropDown';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserRegularExpression } from '@validation/user';
import emailjs from '@emailjs/browser';
import { SnackBar } from '@components/ui/SnackBar';
import { Dictionary } from '@lib/dictionary';
import { TMessageEmail } from '@customTypes/index';

import style from './form.module.scss';

import { InfinityLoader } from '@/components/ui/InfinityLoader';

export function FormComponent({ dictionary }: { dictionary: Dictionary }) {
  const { contactForm } = dictionary;
  const selectValues = contactForm.contactSelect.split(',');
  const [selectValue, setSelectValue] = useState(selectValues[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<TMessageEmail>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TMessageEmail> = async (data) => {
    setSuccess('');
    const userData = { ...data, selectValue };
    reset();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID_USER_EMAIL ?? '',
        userData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then((result) => {
        if (result.status === 200) {
          setSuccess(contactForm.successMessage);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className={style.sectionWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className={style.formWrapper}>
        <div className={style.inputWrapper}>
          <input
            className={style.contactInput}
            placeholder={contactForm.placeholderName}
            {...register('user_name', {
              required: true,
              pattern: {
                value: UserRegularExpression.fullName,
                message: contactForm.errorMessageName,
              },
            })}
          />
          {errors.user_name && <p className={style.errorMessage}>{errors.user_name.message}</p>}
        </div>
        <div className={style.inputWrapper}>
          <input
            className={style.contactInput}
            placeholder={contactForm.placeholderEmail}
            {...register('user_email', {
              required: true,
              pattern: {
                value: UserRegularExpression.email,
                message: contactForm.errorMessageEmail,
              },
            })}
          />
          {errors.user_email && <p className={style.errorMessage}>{errors.user_email.message}</p>}
        </div>
        <DropDown value={selectValue} setValue={setSelectValue} selectValues={selectValues} />
        <div className={style.inputWrapper}>
          <textarea
            className={`${style.contactInput} ${style.contactTextArea}`}
            placeholder={contactForm.placeholderMessage}
            {...register('message', {
              required: true,
              minLength: {
                value: 10,
                message: contactForm.errorMessageMessage,
              },
            })}
          />
          {errors.message && <p className={style.errorMessage}>{errors.message.message}</p>}
        </div>
        <div className={style.btnWrapper}>
          <button type='submit' className={buttonStyle.formPrimary} disabled={!isValid}>
            {contactForm.btn}
          </button>
          {loading && (
            <div className={style.loader}>
              <InfinityLoader />
            </div>
          )}
          {success && <SnackBar message={success} />}
        </div>
      </form>
    </div>
  );
}
