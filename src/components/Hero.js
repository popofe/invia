import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Maîtrisez l’IA et <span className={styles.highlight}>boostez votre carrière</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Formation pour adultes – modules interactifs – pas de prérequis en code.
                        Devenez acteur de l’IA en 3 mois avec Invia.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#contact" className="btn btn-primary">
                            Je m'inscris
                        </Link>
                        <Link href="#program" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
                            Découvrir le programme
                        </Link>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.imagePlaceholder}>
                        {/* Placeholder for "Visuel fort" - could be an image of adults in a workshop */}
                        <div className={styles.overlay}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
