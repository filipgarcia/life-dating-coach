import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const { translations, language } = useTranslation();

    const getLink = (path) => {
        return language === 'sv' ? `/sv${path}` : path;
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="col-span-1">
                        <Link to={language === 'sv' ? '/sv' : '/'} className="footer-logo">
                            NAME<span>COACHING</span>
                        </Link>
                        <p className="footer-text">
                            {translations.meta.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-heading">Menu</h4>
                        <ul className="footer-links">
                            <li><Link to={getLink('/about')}>{translations.nav.about}</Link></li>
                            <li><Link to={getLink('/services')}>{translations.nav.services}</Link></li>
                            <li><Link to={getLink('/results')}>{translations.nav.results}</Link></li>
                            <li><Link to={getLink('/resources')}>{translations.nav.resources}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-heading">{translations.footer.contact}</h4>
                        <ul className="footer-contact">
                            <li>
                                <Mail size={16} />
                                <a href="mailto:hello@example.com">hello@example.com</a>
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="footer-links">
                            <li><Link to={getLink('/privacy')}>Privacy Policy</Link></li>
                            <li><Link to={getLink('/terms')}>Terms of Service</Link></li>
                            <li style={{ marginTop: '16px', opacity: 0.7 }}>{translations.footer.notTherapy}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Name Coaching. {translations.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
