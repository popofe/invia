import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>Invia</div>
                        <p className={styles.tagline}>
                            L'école de l'Intelligence Artificielle pour les professionnels.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <h4 className={styles.heading}>Liens utiles</h4>
                        <ul>
                            <li><a href="#program">Programme</a></li>
                            <li><a href="#testimonials">Témoignages</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <h4 className={styles.heading}>Contact</h4>
                        <p>contact@invia-formation.com</p>
                        <p>+33 1 23 45 67 89</p>
                        <div className={styles.socials}>
                            {/* Social icons placeholders */}
                            <span>LinkedIn</span>
                            <span>Twitter</span>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Invia. Tous droits réservés.</p>
                    <div className={styles.legalLinks}>
                        <a href="#">Mentions légales</a>
                        <a href="#">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
