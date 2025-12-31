import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Star, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    const { translations, language } = useTranslation();
    const t = translations.servicesPage;

    const getLink = (path) => language === 'sv' ? `/sv${path}` : path;

    return (
        <div className="page-container">
            <Helmet>
                <title>{t.hero.title} | {translations.meta.title}</title>
            </Helmet>

            {/* Hero */}
            <section className="services-hero">
                <div className="container">
                    <h1>{t.hero.title}</h1>
                    <p className="subtitle">{t.hero.subtitle}</p>
                </div>
            </section>

            {/* Overview */}
            <section className="section section-compact bg-white">
                <div className="container text-center max-w-3xl">
                    <p className="text-xl leading-relaxed text-gray-600">{t.overview}</p>
                </div>
            </section>

            {/* Packages */}
            <section className="section section-compact bg-light">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2>{t.packages.title}</h2>
                        <p className="text-gray-500 italic mt-2">{t.packages.disclaimer}</p>
                    </div>

                    <div className="packages-grid">
                        {/* Foundation */}
                        <div className="package-card">
                            <h3>{t.packages.foundation.title}</h3>
                            <div className="price">{t.packages.foundation.price}</div>
                            <div className="duration"><Calendar size={16} /> {t.packages.foundation.duration}</div>
                            <hr className="divider" />
                            <ul className="package-features">
                                {t.packages.foundation.includes.map((item, idx) => (
                                    <li key={idx}><Check size={18} className="check-icon" /> {item}</li>
                                ))}
                            </ul>
                            <div className="ideal-for">
                                <strong>{t.packages.foundation.idealFor}</strong>
                            </div>
                            <Link to={getLink('/apply')} className="btn btn-primary w-full mt-6 block text-center">
                                {translations.nav.apply}
                            </Link>
                        </div>

                        {/* Complete */}
                        <div className="package-card featured">
                            <div className="popular-tag">{t.packages.complete.tag}</div>
                            <h3>{t.packages.complete.title}</h3>
                            <div className="price">{t.packages.complete.price}</div>
                            <div className="duration"><Calendar size={16} /> {t.packages.complete.duration}</div>
                            <hr className="divider" />
                            <ul className="package-features">
                                {t.packages.complete.includes.map((item, idx) => (
                                    <li key={idx}><Check size={18} className="check-icon" /> {item}</li>
                                ))}
                            </ul>
                            <div className="ideal-for">
                                <strong>{t.packages.complete.idealFor}</strong>
                            </div>
                            <Link to={getLink('/apply')} className="btn btn-secondary w-full mt-6 block text-center">
                                {translations.nav.apply}
                            </Link>
                        </div>
                    </div>

                    <div className="text-center bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto" style={{ marginTop: '80px', clear: 'both' }}>
                        <p className="font-semibold text-primary">{t.payment}</p>
                    </div>
                </div>
            </section>

            {/* Unique Features */}
            <section className="section section-compact bg-white">
                <div className="container">
                    <h2 className="text-center mb-12">{t.unique.title}</h2>
                    <div className="unique-grid">
                        {t.unique.items.map((item, idx) => (
                            <div key={idx} className="unique-item">
                                <Star className="unique-icon" size={24} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-compact cta-section bg-gray-900 text-white text-center" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
                    <p className="text-xl text-gray-400 mb-8">{t.cta.subtitle}</p>
                    <Link to={getLink('/apply')} className="btn btn-primary btn-large">
                        {t.cta.title}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
