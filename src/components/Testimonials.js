import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sophie Martin",
            role: "Responsable Marketing",
            quote: "Grâce à Invia, j'ai pu comprendre comment intégrer l'IA dans ma stratégie marketing. La formation est très concrète et adaptée aux professionnels.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Thomas Dubois",
            role: "Consultant Financier",
            quote: "Je partais de zéro en code. Aujourd'hui, je suis capable d'automatiser mes analyses financières avec Python. Une révélation !",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Julie Leroy",
            role: "En reconversion",
            quote: "L'accompagnement est top. J'ai trouvé un poste de Data Analyst junior 2 mois après la fin de la formation.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <section id="testimonials" className={`section ${styles.testimonials}`}>
            <div className="container">
                <h2 className="section-title">Ce qu'ils en disent</h2>
                <p className="section-subtitle">
                    Découvrez les retours de nos anciens apprenants qui ont transformé leur carrière.
                </p>
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.quote}>"{t.quote}"</div>
                            <div className={styles.author}>
                                <img src={t.image} alt={t.name} className={styles.avatar} />
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
