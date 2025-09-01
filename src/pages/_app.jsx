import '../styles/globals.css';
import { Rubik } from 'next/font/google';

// Load Rubik font (weights: 400, 500, 700)
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}
