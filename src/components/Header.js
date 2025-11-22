import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Invia
        </Link>
        <nav className={styles.nav}>
          <Link href="#features" className={styles.link}>Pourquoi Invia</Link>
          <Link href="#program" className={styles.link}>Programme</Link>
          <Link href="#testimonials" className={styles.link}>Témoignages</Link>
        </nav>
        <Link href="#contact" className="btn btn-primary">
          Je m'inscris
        </Link>
      </div>
    </header>
  );
}
