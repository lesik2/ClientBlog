import emailjs from '@emailjs/browser';

export function sendMessageViaEmail(templateKey: string, data: Record<string, unknown> | undefined) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
    templateKey,
    data,
    process.env.NEXT_PUBLIC_PUBLIC_KEY,
  );
}
