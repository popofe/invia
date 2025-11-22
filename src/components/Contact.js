import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Prêt à transformer votre carrière ?</h2>
                        <p className={styles.description}>
                            Inscrivez-vous dès maintenant ou contactez-nous pour discuter de votre projet de formation.
                            Les places sont limitées pour garantir la qualité des échanges.
                        </p>
                        <ul className={styles.benefits}>
                            <li>✓ Entretien de découverte offert</li>
                            <li>✓ Financement possible</li>
                            <li>✓ Accès à la communauté Invia</li>
                        </ul>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nom complet</label>
                            <input type="text" id="name" className={styles.input} placeholder="Jean Dupont" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email professionnel</label>
                            <input type="email" id="email" className={styles.input} placeholder="jean@entreprise.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Téléphone</label>
                            <input type="tel" id="phone" className={styles.input} placeholder="06 12 34 56 78" />
                        </div>
                        <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                            Demander ma brochure / M'inscrire
                        </button>
                        <p className={styles.legal}>
                            En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
