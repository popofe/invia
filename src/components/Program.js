import styles from './Program.module.css';

export default function Program() {
    const modules = [
        {
            title: "Module 1 : Fondamentaux de l'IA",
            duration: "2 semaines",
            content: "Comprendre les concepts clés, l'histoire et les enjeux éthiques de l'intelligence artificielle."
        },
        {
            title: "Module 2 : Machine Learning Pratique",
            duration: "4 semaines",
            content: "Initiation au Python, manipulation de données et création de premiers modèles prédictifs."
        },
        {
            title: "Module 3 : Deep Learning & NLP",
            duration: "4 semaines",
            content: "Réseaux de neurones, traitement du langage naturel et vision par ordinateur."
        },
        {
            title: "Module 4 : Projet Capstone",
            duration: "2 semaines",
            content: "Réalisation d'un projet concret en groupe, encadré par des experts."
        }
    ];

    return (
        <section id="program" className={`section ${styles.program}`}>
            <div className="container">
                <h2 className="section-title">Le Programme</h2>
                <p className="section-subtitle">
                    Une formation complète de 3 mois, conçue pour les adultes actifs.
                    Disponible en format hybride (soir & weekend) ou 100% en ligne.
                </p>

                <div className={styles.timeline}>
                    {modules.map((module, index) => (
                        <div key={index} className={styles.module}>
                            <div className={styles.number}>{index + 1}</div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <h3 className={styles.moduleTitle}>{module.title}</h3>
                                    <span className={styles.duration}>{module.duration}</span>
                                </div>
                                <p className={styles.description}>{module.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaContainer}>
                    <a href="#contact" className="btn btn-primary">
                        Télécharger la brochure détaillée
                    </a>
                </div>
            </div>
        </section>
    );
}
