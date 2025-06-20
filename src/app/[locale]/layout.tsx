import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Hero from '@/components/hero';
import Chat from '@/components/chat/chat';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hold CD',
  description: 'Hold CD',
  icons: {
    icon: '/favicon.jpg', // Ajoute le lien vers ton favicon ici
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>

        <NextIntlClientProvider messages={messages}>
          <Header />
          <Hero />
          <Chat />
          {children}
          <Footer />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}