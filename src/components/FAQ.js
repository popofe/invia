'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
    const faqs = [
        {
            question: "Faut-il savoir coder pour suivre la formation ?",
            answer: "Non, notre formation est conçue pour les débutants. Le module 2 vous initie aux bases de Python nécessaires pour l'IA, sans prérequis techniques complexes."
        },
        {
            question: "Quelle est la charge de travail hebdomadaire ?",
            answer: "Comptez environ 5 à 8 heures par semaine, incluant les sessions en direct et le travail personnel sur les projets."
        },
        {
            question: "La formation est-elle certifiante ?",
            answer: "Oui, vous recevrez un certificat de réussite Invia à la fin du parcours, après validation de votre projet final."
        },
        {
            question: "Comment financer la formation ?",
            answer: "Nous proposons des facilités de paiement en 3 fois sans frais. La formation est également éligible à certains financements (CPF, OPCO, etc.). Contactez-nous pour en savoir plus."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className={`section ${styles.faq}`}>
            <div className="container">
                <h2 className="section-title">Questions Fréquentes</h2>
                <p className="section-subtitle">
                    Tout ce que vous devez savoir avant de vous lancer.
                </p>
                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}>
                            <button className={styles.question} onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className={styles.answer} style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
