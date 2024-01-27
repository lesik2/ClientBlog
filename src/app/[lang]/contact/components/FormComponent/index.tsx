'use client';

import buttonStyle from '@styles/ui/button.module.scss';
import { useState } from 'react';
import { DropDown } from '@components/ui/DropDown';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserRegularExpression } from '@validation/user';
import { SnackBar } from '@components/ui/SnackBar';
import { Dictionary } from '@lib/dictionary';
import { sendMessageViaEmail } from '@api/sendEmail';
import { InfinityLoader } from '@components/ui/InfinityLoader';

import style from './form.module.scss';

import { MessageEmail } from '../../interfaces';

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
  } = useForm<MessageEmail>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<MessageEmail> = async (data) => {
    setSuccess('');
    const userData = { ...data, selectValue };
    reset();
    setLoading(true);

    sendMessageViaEmail(process.env.NEXT_PUBLIC_TEMPLATE_ID_USER_EMAIL ?? '', userData)
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
      <form
        data-cy='contactForm'
        onSubmit={handleSubmit(onSubmit)}
        autoComplete='off'
        className={style.formWrapper}
      >
        <div className={style.inputWrapper}>
          <input
            data-cy='contactUserInput'
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
            data-cy='contactEmailInput'
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
            data-cy='contactMessageTextInput'
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
          <button
            data-cy='contactSubmit'
            type='submit'
            className={buttonStyle.formPrimary}
            disabled={!isValid}
          >
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
