import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { User, Award, Heart, Shield } from 'lucide-react';
import './About.css';

const About = () => {
    const { translations, language } = useTranslation();
    const t = translations.aboutPage;

    const valueIcons = [
        <Heart size={32} />,
        <User size={32} />,
        <Award size={32} />,
        <Shield size={32} />
    ];

    return (
        <div className="page-container">
            <Helmet>
                <title>{t.hero.title} | {translations.meta.title}</title>
            </Helmet>

            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <h1>{t.hero.title}</h1>
                    <p className="subtitle">{t.hero.subtitle}</p>
                </div>
            </section>

            {/* Story */}
            <section className="section bg-white story-section">
                <div className="container stories-container">
                    <div className="story-image">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" alt="Coach profile" />
                    </div>
                    <div className="story-content">
                        <h2>{t.story.title}</h2>
                        <p>{t.story.content1}</p>
                        <p>{t.story.content2}</p>
                        <p className="highlight-text">{t.story.content3}</p>
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="section bg-light credentials-section">
                <div className="container">
                    <h2 className="text-center">{t.credentials.title}</h2>
                    <ul className="credentials-list">
                        {t.credentials.items.map((item, idx) => (
                            <li key={idx} className="credential-item">
                                <Award className="credential-icon" size={24} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-center mt-8 text-sm opacity-70 italic">{t.credentials.note}</p>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-center mb-12">{t.values.title}</h2>
                    <div className="values-grid">
                        {t.values.items.map((item, idx) => (
                            <div key={idx} className="value-card">
                                <div className="value-icon-box">
                                    {valueIcons[idx] || <Heart />}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section bg-primary text-white text-center">
                <div className="container">
                    <h2 className="mb-6">{translations.aboutPreview.cta}</h2>
                    <Link
                        to={language === 'sv' ? '/sv/approach' : '/approach'}
                        className="btn btn-secondary"
                    >
                        {language === 'sv' ? 'Läs mer om min metod' : 'Learn More About My Approach'}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
