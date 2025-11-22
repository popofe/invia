import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invia - Formation IA pour Adultes et Professionnels',
  description: 'Devenez acteur de l’IA en 3 mois. Formation pratique pour adultes, sans prérequis en code. Inscrivez-vous dès maintenant.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
