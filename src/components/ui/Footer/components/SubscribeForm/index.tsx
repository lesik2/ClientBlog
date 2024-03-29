'use client';

import button from '@styles/ui/button.module.scss';
import { useState } from 'react';
import { emailSchema } from '@validation/email';
import { SnackBar } from '@components/ui/SnackBar';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InfinityLoader } from '@components/ui/InfinityLoader';
import { sendMessageViaEmail } from '@api/sendEmail';

import style from './submitForm.module.scss';

import { ISubscribeForm, ISubscribeEmail } from '../../interfaces';

export default function SubscribeForm({ placeholder, btnText }: ISubscribeForm) {
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, reset } = useForm<ISubscribeEmail>({
    mode: 'onChange',
  });

  const sendEmail: SubmitHandler<ISubscribeEmail> = async (data) => {
    setSuccess('');
    reset();

    try {
      await emailSchema.validate(data);
      setLoading(true);

      sendMessageViaEmail(process.env.NEXT_PUBLIC_TEMPLATE_ID_SUBSCRIBE ?? '', data)
        .then((result) => {
          if (result.status === 200) {
            setSuccess(`We have received you email: ${data.user_email}`);
          }
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setErrorMessage(error);
      }
    }
  };

  const handleFocus = () => {
    setErrorMessage(null);
  };

  return (
    <form
      data-cy='form-footer'
      className={style.submitForm}
      onSubmit={handleSubmit(sendEmail)}
      autoComplete='off'
    >
      <div className={style.inputWrapper}>
        <input
          data-cy='input-footer'
          placeholder={placeholder}
          className={style.input}
          onFocus={handleFocus}
          {...register('user_email', { required: true })}
        />
        {errorMessage && (
          <p data-cy='footer-error' className={style.errorMessage}>
            {errorMessage.message}
          </p>
        )}
      </div>
      <div className={style.btnWrapper}>
        <button data-cy='button-footer' className={button.primary} type='submit' disabled={loading}>
          {btnText}
        </button>
        {loading && (
          <div className={style.loader}>
            <InfinityLoader />
          </div>
        )}
      </div>
      {success && <SnackBar message={success} />}
    </form>
  );
}
