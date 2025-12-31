import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, CheckCircle, Star } from 'lucide-react';
import './Results.css';

const Results = () => {
    const { translations, language } = useTranslation();
    const t = translations.resultsPage;
    const getLink = (path) => language === 'sv' ? `/sv${path}` : path;

    return (
        <div className="page-container">
            <Helmet>
                <title>{t.hero.title} | {translations.meta.title}</title>
            </Helmet>

            {/* Hero */}
            <section className="results-hero">
                <div className="container">
                    <h1>{t.hero.title}</h1>
                    <p className="subtitle">{t.hero.subtitle}</p>
                </div>
            </section>

            {/* Stats Dashboard */}
            <section className="section bg-white">
                <div className="container">
                    <div className="stats-dashboard">
                        <div className="stat-card">
                            <TrendingUp size={40} className="stat-icon" />
                            <div className="stat-value">{t.stats.confidence}</div>
                        </div>
                        <div className="stat-card">
                            <Users size={40} className="stat-icon" />
                            <div className="stat-value">{t.stats.matches}</div>
                        </div>
                        <div className="stat-card">
                            <CheckCircle size={40} className="stat-icon" />
                            <div className="stat-value">{t.stats.program}</div>
                        </div>
                        <div className="stat-card">
                            <Star size={40} className="stat-icon" />
                            <div className="stat-value">{t.stats.satisfaction}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-16">{t.caseStudies.title}</h2>
                    <div className="case-studies-stack">
                        {t.caseStudies.items.map((study, idx) => (
                            <div key={idx} className="case-study-card">
                                <div className="case-study-header">
                                    <div className="client-avatar">{study.name.charAt(0)}</div>
                                    <h3>{study.name}</h3>
                                </div>
                                <div className="case-study-body">
                                    <div className="study-section">
                                        <h4>Challenge</h4>
                                        <p>{study.challenge}</p>
                                    </div>
                                    <div className="study-section result">
                                        <h4>Result</h4>
                                        <p>{study.result}</p>
                                    </div>
                                </div>
                                <div className="case-study-quote">
                                    "{study.quote}"
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Placeholder */}
            <section className="section bg-white text-center">
                <div className="container">
                    <h2 className="mb-8">Video Testimonials</h2>
                    <div className="video-grid">
                        <div className="video-placeholder">
                            <div className="play-button">▶</div>
                            <p>Client Interview 1</p>
                        </div>
                        <div className="video-placeholder">
                            <div className="play-button">▶</div>
                            <p>Client Interview 2</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h2 className="mb-6">{translations.finalCta.headline}</h2>
                    <Link
                        to={getLink('/apply')}
                        className="btn btn-secondary btn-large"
                    >
                        {language === 'sv' ? 'Starta Din Resa' : 'Start Your Journey'}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Results;
