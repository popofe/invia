import styles from './Integration.module.css';

export default function Integration() {
    return (
        <section className={`section ${styles.integration}`}>
            <div className="container">
                <h2 className="section-title">Démonstration Interactive</h2>
                <p className="section-subtitle">
                    Découvrez notre outil en action.
                </p>
                <div className={styles.iframeContainer}>
                    <iframe
                        src="https://claude.site/public/artifacts/751bd5de-5f1e-4d36-8557-f3f2221db180/embed"
                        title="Claude Artifact"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        allow="clipboard-write"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
