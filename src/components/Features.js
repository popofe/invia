import styles from './Features.module.css';

export default function Features() {
    const features = [
        {
            title: "Pédagogie Pratique",
            description: "Apprenez par la pratique avec des projets concrets et des ateliers interactifs.",
            icon: "🛠️"
        },
        {
            title: "Experts du Domaine",
            description: "Formateurs expérimentés et reconnus dans le domaine de l'IA.",
            icon: "👨‍🏫"
        },
        {
            title: "Petits Groupes",
            description: "Classes limitées pour un suivi personnalisé et une meilleure interaction.",
            icon: "👥"
        },
        {
            title: "Certification Reconnue",
            description: "Obtenez un certificat valorisable sur le marché du travail.",
            icon: "📜"
        }
    ];

    return (
        <section id="features" className={`section ${styles.features}`}>
            <div className="container">
                <h2 className="section-title">Pourquoi choisir Invia ?</h2>
                <p className="section-subtitle">
                    Nous offrons une approche unique pour vous former aux technologies de demain.
                </p>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
