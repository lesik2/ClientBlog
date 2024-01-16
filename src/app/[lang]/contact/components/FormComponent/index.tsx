'use client';

import style from '@styles/contactPage/form.module.scss';
import inputStyle from '@styles/ui/contactInput.module.scss';
import buttonStyle from '@styles/ui/button.module.scss';
import { useState } from 'react';
import { DropDown } from '@components/ui/DropDown';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserRegularExpression } from '@validation/user';
import { InfinityLoader } from '@components/InfinityLoader';
import emailjs from '@emailjs/browser';
import { SnackBar } from '@components/SnackBar';
import { Dictionary } from '@lib/dictionary';

export type TMessageEmail = {
  user_name: string;
  user_email: string;
  message: string;
};
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
        <div className={inputStyle.inputWrapper}>
          <input
            className={inputStyle.contactInput}
            placeholder={contactForm.placeholderName}
            {...register('user_name', {
              required: true,
              pattern: {
                value: UserRegularExpression.fullName,
                message: contactForm.errorMessageName,
              },
            })}
          />
          {errors.user_name && <p className={inputStyle.errorMessage}>{errors.user_name.message}</p>}
        </div>
        <div className={inputStyle.inputWrapper}>
          <input
            className={inputStyle.contactInput}
            placeholder={contactForm.placeholderEmail}
            {...register('user_email', {
              required: true,
              pattern: {
                value: UserRegularExpression.email,
                message: contactForm.errorMessageEmail,
              },
            })}
          />
          {errors.user_email && <p className={inputStyle.errorMessage}>{errors.user_email.message}</p>}
        </div>
        <DropDown value={selectValue} setValue={setSelectValue} selectValues={selectValues} />
        <div className={inputStyle.inputWrapper}>
          <textarea
            className={`${inputStyle.contactInput} ${inputStyle.contactTextArea}`}
            placeholder={contactForm.placeholderMessage}
            {...register('message', {
              required: true,
              minLength: {
                value: 10,
                message: contactForm.errorMessageMessage,
              },
            })}
          />
          {errors.message && <p className={inputStyle.errorMessage}>{errors.message.message}</p>}
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
