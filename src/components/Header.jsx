import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { language, toggleLanguage, translations } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { key: 'about', path: '#about' },
        { key: 'services', path: '#services' },
        { key: 'results', path: '#results' },
        { key: 'approach', path: '#approach' },
        { key: 'resources', path: '#resources' },
    ];

    const getLink = (path) => {
        return language === 'sv' ? `/sv${path}` : path;
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to={language === 'sv' ? '/sv' : '/'} className="logo">
                    NAME<span>COACHING</span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-desktop">
                    <nav className="nav-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                to={getLink(`/${item.key}`)}
                                className="nav-link"
                            >
                                {translations.nav[item.key]}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={toggleLanguage}
                        className="lang-toggle"
                        aria-label="Toggle language"
                    >
                        <Globe size={18} />
                        <span>{language === 'en' ? 'SV' : 'EN'}</span>
                    </button>

                    <Link
                        to={getLink('/apply')}
                        className="btn-apply"
                    >
                        {translations.nav.apply}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-controls">
                    <button
                        onClick={toggleLanguage}
                        className="lang-toggle"
                    >
                        {language === 'en' ? 'SV' : 'EN'}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="hamburger-btn"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            to={getLink(`/${item.key}`)}
                            className="mobile-nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.nav[item.key]}
                        </Link>
                    ))}
                    <Link
                        to={getLink('/apply')}
                        className="btn-apply"
                        style={{ width: '100%', textAlign: 'center' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {translations.nav.apply}
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
