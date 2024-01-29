import type { Metadata } from 'next';
import { sen, inter } from '@lib/fonts';
import '@styles/global.scss';
import Header from '@components/ui/Header';
import Footer from '@components/ui/Footer';

import { Locale, i18n } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'App for reading amazing posts',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={`${sen.className} ${inter.variable}`}>
        <Header dictionary={dictionary} lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
