import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import './Resources.css';

const Resources = () => {
    const { translations, language } = useTranslation();
    const t = translations.resourcesPage;
    const getLink = (path) => language === 'sv' ? `/sv${path}` : path;

    const [expandedArticle, setExpandedArticle] = useState(null);

    const toggleArticle = (id) => {
        if (expandedArticle === id) {
            setExpandedArticle(null);
        } else {
            setExpandedArticle(id);
            // Optional: scroll to the article top
        }
    };

    return (
        <div className="page-container">
            <Helmet>
                <title>{t.hero.title} | {translations.meta.title}</title>
            </Helmet>

            {/* Hero */}
            <section className="resources-hero">
                <div className="container">
                    <h1>{t.hero.title}</h1>
                    <p className="subtitle">{t.hero.subtitle}</p>
                </div>
            </section>

            {/* Articles */}
            <section className="section bg-white transform -translate-y-12 pt-0">
                <div className="container max-w-4xl">
                    <div className="articles-list">
                        {t.articles.items.map((article) => (
                            <div key={article.id} className={`article-row ${expandedArticle === article.id ? 'expanded' : ''}`}>
                                <div className="article-header" onClick={() => toggleArticle(article.id)}>
                                    <div className="article-title-block">
                                        <h3>{article.title}</h3>
                                        <p className="article-subtitle">{article.subtitle}</p>
                                    </div>
                                    <button className="expand-btn">
                                        {expandedArticle === article.id ? <ChevronUp /> : <ChevronDown />}
                                    </button>
                                </div>

                                {expandedArticle === article.id && (
                                    <div className="article-content">
                                        {article.content.map((paragraph, idx) => {
                                            if (paragraph.startsWith('### ')) {
                                                return <h4 key={idx}>{paragraph.replace('### ', '')}</h4>;
                                            }
                                            return <p key={idx}>{paragraph}</p>;
                                        })}
                                        <div className="article-footer">
                                            <button className="btn-text" onClick={() => toggleArticle(null)}>
                                                {t.articles.readLess} <ChevronUp size={16} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {expandedArticle !== article.id && (
                                    <div className="article-preview">
                                        <p>{article.content[0].substring(0, 150)}...</p>
                                        <button className="btn-text" onClick={() => toggleArticle(article.id)}>
                                            {t.articles.readMore} <ChevronDown size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
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

export default Resources;
