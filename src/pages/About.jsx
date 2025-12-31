import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { User, Award, Heart, Shield } from 'lucide-react';
import './About.css';
import filipProfile from '../assets/filip_profile_v2.png';

const About = () => {
    const { translations, language } = useTranslation();
    const t = translations.aboutPage;
    const story = t.story || {};

    // Helper for rendering bold text from **markers**
    const renderWithBold = (text) => {
        if (!text) return null;
        // Simple splitter for **text**
        const parts = text.split(/(\*\*.*?\*\*)/g);

        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

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
            <section className="section section-compact bg-white story-section">
                <div className="container stories-container">
                    <div className="story-image">
                        <img src={filipProfile} alt="Filip Garcia" />
                    </div>
                    <div className="story-content">
                        <h2>{t.story.title}</h2>
                        <div className="space-y-6">
                            {/* Intro */}
                            <p className="text-xl font-medium text-gray-800 italic border-l-4 border-secondary pl-4 py-1">
                                {renderWithBold(story.intro)}
                            </p>

                            {/* Early Years & Education */}
                            <p>{renderWithBold(story.earlyYears)}</p>
                            <p>{renderWithBold(story.education)}</p>

                            {/* Turning Point with Highlighted Quote */}
                            {story.turningPoint && (
                                <div className="my-8">
                                    <p className="mb-6">{renderWithBold(story.turningPoint.text)}</p>
                                    <p className="highlight-text my-8">
                                        "{story.turningPoint.quote}"
                                    </p>
                                    <p>{renderWithBold(story.turningPoint.subtext)}</p>
                                </div>
                            )}

                            {/* Growth & Philosophy */}
                            <p>{renderWithBold(story.growth)}</p>
                            <p>{renderWithBold(story.philosophy)}</p>

                            {/* Promise */}
                            <p>{renderWithBold(story.promise)}</p>

                            {/* Closing */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-xl font-display text-primary font-bold">
                                    {renderWithBold(story.closing)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Values */}
            <section className="section section-compact bg-white">
                <div className="container">
                    <h2 className="text-center" style={{ color: 'var(--color-secondary)', marginBottom: '60px' }}>{t.values.title}</h2>
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
            <section className="section section-compact cta-section bg-primary text-white text-center py-24" style={{ paddingBottom: '120px' }}>
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '40px' }}>
                        {language === 'sv' ? 'Nyfiken på hur jag jobbar?' : 'Curious about how I work?'}
                    </h2>
                    <Link
                        to={language === 'sv' ? '/sv/approach' : '/approach'}
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', padding: '16px 40px', fontSize: '1.25rem', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {language === 'sv' ? 'Läs mer om min metod' : 'Learn More About My Approach'}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
