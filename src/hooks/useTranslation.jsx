import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { en } from '../locales/en';
import { sv } from '../locales/sv';

const TranslationContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const location = useLocation();
    const navigate = useNavigate();

    // Simple detection based on path
    useEffect(() => {
        const isSv = location.pathname.startsWith('/sv');
        setLanguage(isSv ? 'sv' : 'en');
    }, [location]);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'sv' : 'en';
        const currentPath = location.pathname;

        let newPath;
        if (language === 'en') {
            // Switch to SV: prepend /sv
            newPath = `/sv${currentPath === '/' ? '' : currentPath}`;
        } else {
            // Switch to EN: remove /sv
            newPath = currentPath.replace(/^\/sv/, '') || '/';
        }

        navigate(newPath);
        localStorage.setItem('languagePreference', newLang);
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = language === 'en' ? en : sv;
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    const translations = language === 'en' ? en : sv;

    return (
        <TranslationContext.Provider value={{ language, toggleLanguage, t, translations }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);
