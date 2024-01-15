'use client';

import style from '@styles/ui/footer.module.scss';
import button from '@styles/ui/button.module.scss';
import { useRef, useState } from 'react';
import { emailSchema } from '@validation/email';
import emailjs from '@emailjs/browser';
import { InfinityLoader } from '@components/InfinityLoader';
import { SnackBar } from '@components/SnackBar';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface ISubscribeForm {
  placeholder: string;
  btnText: string;
}
export type TSubscribeEmail = {
  user_email: string;
};
export default function SubscribeForm({ placeholder, btnText }: ISubscribeForm) {
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const form = useRef<HTMLFormElement | null>(null);

  const { register, handleSubmit, reset } = useForm<TSubscribeEmail>({
    mode: 'onChange',
  });

  const sendEmail: SubmitHandler<TSubscribeEmail> = async (data) => {
    reset();

    try {
      await emailSchema.validate(data);
      setLoading(true);
      if (form.current === null) return;

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
          data,
          process.env.NEXT_PUBLIC_PUBLIC_KEY,
        )
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
    <form ref={form} className={style.submitForm} onSubmit={handleSubmit(sendEmail)} autoComplete='off'>
      <div className={style.inputWrapper}>
        <input
          placeholder={placeholder}
          className={style.input}
          onFocus={handleFocus}
          {...register('user_email', { required: true })}
        />
        {errorMessage && <p className={style.errorMessage}>{errorMessage.message}</p>}
      </div>
      <div className={style.btnWrapper}>
        <button className={button.primary} type='submit' disabled={loading}>
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
