import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import {
    ArrowRight,
    CheckCircle,
    Shield,
    Users,
    TrendingUp,
    MessageCircle,
    Heart,
    Activity,
    Drama,
    Puzzle,
    Sprout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const { translations, language } = useTranslation();
    const t = translations;

    // Icons mapping for Approach section
    const approachIcons = [
        <Users className="w-8 h-8" size={32} />,
        <MessageCircle className="w-8 h-8" size={32} />,
        <Activity className="w-8 h-8" size={32} />,
        <TrendingUp className="w-8 h-8" size={32} />,
        <Heart className="w-8 h-8" size={32} />
    ];

    const getLink = (path) => language === 'sv' ? `/sv${path}` : path;

    return (
        <div>
            <Helmet>
                <html lang={language} />
                <title>{t.meta.title}</title>
                <meta name="description" content={t.meta.description} />
            </Helmet>

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60 z-10" style={{ background: 'linear-gradient(to right, rgba(26, 37, 47, 0.9), rgba(26, 37, 47, 0.7))', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></div>
                <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
                    alt="Confident lifestyle"
                    className="hero-bg"
                />

                <div className="hero-content">
                    <h1 className="hero-title">
                        {t.hero.headline}
                    </h1>
                    <p className="hero-subtitle">
                        {t.hero.subheadline}
                    </p>
                    <div className="hero-actions">
                        <Link
                            to={getLink('/apply')}
                            className="btn btn-primary"
                        >
                            {t.hero.ctaPrimary}
                        </Link>
                        <a
                            href="#approach"
                            className="btn btn-secondary"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </div>
            </section>

            {/* PROBLEM / SOLUTION */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-title-container">
                        <h2 className="section-title">{t.problem.headline}</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="problem-icon-wrapper">
                                <Drama size={48} strokeWidth={1.5} style={{ color: '#1e3a8a' }} />
                            </div>
                            <p className="text-lg font-medium">{t.problem.card1}</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon-wrapper">
                                <Puzzle size={48} strokeWidth={1.5} style={{ color: '#f97316' }} />
                            </div>
                            <p className="text-lg font-medium">{t.problem.card2}</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon-wrapper">
                                <Sprout size={48} strokeWidth={1.5} style={{ color: '#059669' }} />
                            </div>
                            <p className="text-lg font-medium">{t.problem.card3}</p>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '48px' }}>
                        <p className="text-xl" style={{ color: 'var(--color-primary-light)', fontStyle: 'italic', fontWeight: 600 }}>{t.problem.transition}</p>
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section id="approach" className="section approach-section">
                <div className="container">
                    <div className="section-title-container">
                        <h2 className="section-title">{t.approach.headline}</h2>
                        <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>Comprehensive coaching covering every aspect of your life.</p>
                    </div>

                    <div className="approach-grid">
                        {t.approach.cards.map((card, idx) => (
                            <div key={idx} className="approach-card">
                                <div className="approach-icon-box">
                                    {approachIcons[idx] || <CheckCircle />}
                                </div>
                                <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>{card.title}</h3>
                                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-title-container">
                        <h2 className="section-title">{t.socialProof.headline}</h2>
                        <div className="stats-banner">
                            {t.socialProof.stats}
                        </div>
                    </div>

                    <div className="testimonial-grid">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="testimonial-card">
                                <div className="quote-mark">"</div>
                                <p style={{ marginBottom: '24px', position: 'relative', zIndex: 10, lineHeight: 1.6 }}>"The coaching completely changed how I view myself. I went from terrified of dating to actually enjoying it. Highly recommended."</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: '#d1d5db', borderRadius: '50%', marginRight: '12px' }}></div>
                                    <div>
                                        <p style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: '0.9rem' }}>Client Name</p>
                                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Stockholm, SE</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" className="section how-it-works-section">
                <div className="container">
                    <div className="section-title-container">
                        <h2 style={{ color: 'white' }} className="section-title">{t.howItWorks.headline}</h2>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div className="steps-grid">
                            {t.howItWorks.steps.map((step, idx) => (
                                <div key={idx} className="step-card">
                                    <div className="step-number">
                                        {idx + 1}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>{step.title}</h3>
                                    <p style={{ color: '#9ca3af', fontSize: '0.9rem', maxWidth: '200px' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '64px' }}>
                        <Link to={getLink('/apply')} style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '1.125rem' }}>
                            {t.howItWorks.cta} <ArrowRight className="ml-2" size={20} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* GUARANTEE */}
            <section className="section" style={{ backgroundColor: '#ecfdf5' }}>
                <div className="guarantee-container">
                    <Shield style={{ color: 'var(--color-success)', width: '64px', height: '64px', margin: '0 auto 24px auto' }} />
                    <h2 className="section-title" style={{ color: '#111827' }}>{t.guarantee.headline}</h2>
                    <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '8px' }}>{t.guarantee.text}</p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{t.guarantee.subtext}</p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section final-cta-section">
                <div className="final-cta-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>{t.finalCta.headline}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#bfdbfe', marginBottom: '40px' }}>{t.finalCta.subtext}</p>
                    <Link
                        to={getLink('/apply')}
                        className="btn"
                        style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 40px', fontSize: '1.25rem' }}
                    >
                        {t.finalCta.button}
                    </Link>
                    <p className="cta-note">{t.finalCta.note}</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
