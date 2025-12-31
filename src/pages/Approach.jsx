import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, Activity, Heart, Shield, HelpCircle } from 'lucide-react';
import './Approach.css';

const Approach = () => {
    const { translations, language } = useTranslation();
    const t = translations.approachPage;
    const getLink = (path) => language === 'sv' ? `/sv${path}` : path;

    const steps = [
        { icon: <Brain size={32} />, ...t.framework.steps[0] },
        { icon: <MessageCircle size={32} />, ...t.framework.steps[1] },
        { icon: <Activity size={32} />, ...t.framework.steps[2] },
        { icon: <Heart size={32} />, ...t.framework.steps[3] }
    ];

    return (
        <div className="page-container">
            <Helmet>
                <title>{t.hero.title} | {translations.meta.title}</title>
            </Helmet>

            {/* Hero */}
            <section className="approach-hero">
                <div className="container">
                    <h1>{t.hero.title}</h1>
                    <p className="subtitle">{t.hero.subtitle}</p>
                </div>
            </section>

            {/* Philosophy / Problem */}
            <section className="section bg-white">
                <div className="container max-w-4xl">
                    <div className="philosophy-content">
                        <h2>{t.philosophy.title}</h2>
                        <p className="lead">{t.philosophy.content}</p>
                        <div className="solution-box">
                            <p>{t.philosophy.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-12">{t.framework.title}</h2>
                    <div className="framework-steps">
                        {steps.map((step, idx) => (
                            <div key={idx} className="framework-step-card">
                                <div className="step-icon">
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                                {idx < steps.length - 1 && <div className="step-arrow">→</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ethics */}
            <section className="section bg-white">
                <div className="container">
                    <div className="ethics-container">
                        <Shield size={64} className="ethics-shield" />
                        <div className="ethics-content">
                            <h2>{t.ethics.title}</h2>
                            <ul className="ethics-list">
                                {t.ethics.items.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircleIcon />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section bg-light">
                <div className="container max-w-3xl">
                    <h2 className="text-center mb-12">{t.faqs.title}</h2>
                    <div className="faq-list">
                        {t.faqs.items.map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <div className="faq-question">
                                    <HelpCircle size={20} className="text-secondary" />
                                    <h4>{faq.q}</h4>
                                </div>
                                <p className="faq-answer">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <Link
                        to={getLink('/apply')}
                        className="btn btn-secondary btn-large"
                    >
                        {translations.nav.apply}
                    </Link>
                </div>
            </section>
        </div>
    );
};

// Helper for check icon
const CheckCircleIcon = () => (
    <svg
        className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

export default Approach;
