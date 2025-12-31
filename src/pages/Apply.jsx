import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { Check, AlertCircle, Loader } from 'lucide-react';
import './Apply.css';

const Apply = () => {
    const { translations, language } = useTranslation();
    const t = translations.form;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        location: '',
        languagePreference: 'en',
        contactMethod: 'email',
        situation: '',
        tried: '',
        confidence: '5',
        satisfaction: '5',
        success: '',
        importance: '',
        change: '',
        history: '',
        idealPartner: '',
        therapy: '',
        invest: '',
        program: '',
        source: '',
        other: '',
        consentTherapy: false,
        consentCommitted: false,
        consentConsultation: false,
        _subject: 'New Coaching Application',
        _captcha: 'false',
        _template: 'table'
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.consentTherapy || !formData.consentCommitted || !formData.consentConsultation) {
            alert("Please accept all consent checkboxes.");
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/mailafilip@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    message: `New Application from ${formData.name}. See details below.`
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                window.scrollTo(0, 0);
            } else {
                console.error("Form submission failed:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="apply-container success-view">
                <div className="success-card">
                    <div className="success-icon">
                        <Check size={48} />
                    </div>
                    <h2>{t.successTitle}</h2>
                    <p>{t.successMessage}</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn btn-primary"
                        style={{ marginTop: '20px' }}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="apply-page">
            <Helmet>
                <title>{t.title} | {translations.meta.title}</title>
            </Helmet>

            <div className="apply-container">
                <header className="apply-header">
                    <h1>{t.title}</h1>
                    <p>{t.subtitle}</p>
                </header>

                <form onSubmit={handleSubmit} className="apply-form">
                    {/* 1. Personal Information */}
                    <section className="form-section">
                        <h3>{t.sections.personal}</h3>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>{t.fields.name.label} *</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.fields.name.placeholder} />
                            </div>
                            <div className="form-group">
                                <label>{t.fields.email.label} *</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.fields.email.placeholder} />
                            </div>
                            <div className="form-group">
                                <label>{t.fields.phone.label}</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.fields.phone.placeholder} />
                            </div>
                            <div className="form-group half">
                                <label>{t.fields.age.label} *</label>
                                <input required type="text" name="age" value={formData.age} onChange={handleChange} placeholder={t.fields.age.placeholder} />
                            </div>
                            <div className="form-group half">
                                <label>{t.fields.location.label} *</label>
                                <input required type="text" name="location" value={formData.location} onChange={handleChange} placeholder={t.fields.location.placeholder} />
                            </div>
                            <div className="form-group half">
                                <label>{t.fields.language.label}</label>
                                <select name="languagePreference" value={formData.languagePreference} onChange={handleChange}>
                                    <option value="en">{t.fields.language.options.en}</option>
                                    <option value="sv">{t.fields.language.options.sv}</option>
                                </select>
                            </div>
                            <div className="form-group half">
                                <label>{t.fields.contactMethod.label}</label>
                                <select name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
                                    <option value="email">{t.fields.contactMethod.options.email}</option>
                                    <option value="phone">{t.fields.contactMethod.options.phone}</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* 2. Current Situation */}
                    <section className="form-section">
                        <h3>{t.sections.situation}</h3>
                        <div className="form-group">
                            <label>{t.fields.situation.label} *</label>
                            <textarea required name="situation" value={formData.situation} onChange={handleChange} placeholder={t.fields.situation.placeholder} rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.tried.label} *</label>
                            <textarea required name="tried" value={formData.tried} onChange={handleChange} placeholder={t.fields.tried.placeholder} rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.confidence.label} (1-10)</label>
                            <input type="range" min="1" max="10" name="confidence" value={formData.confidence} onChange={handleChange} className="range-input" />
                            <div className="range-value text-center font-bold text-secondary text-xl">{formData.confidence}</div>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.satisfaction.label} (1-10)</label>
                            <input type="range" min="1" max="10" name="satisfaction" value={formData.satisfaction} onChange={handleChange} className="range-input" />
                            <div className="range-value text-center font-bold text-secondary text-xl">{formData.satisfaction}</div>
                        </div>
                    </section>

                    {/* 3. Goals & Motivation */}
                    <section className="form-section">
                        <h3>{t.sections.goals}</h3>
                        <div className="form-group">
                            <label>{t.fields.success.label} *</label>
                            <textarea required name="success" value={formData.success} onChange={handleChange} placeholder={t.fields.success.placeholder} rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.importance.label} *</label>
                            <textarea required name="importance" value={formData.importance} onChange={handleChange} placeholder={t.fields.importance.placeholder} rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.change.label} *</label>
                            <textarea required name="change" value={formData.change} onChange={handleChange} placeholder={t.fields.change.placeholder} rows="2"></textarea>
                        </div>
                    </section>

                    {/* 4. Mindset Assessment */}
                    <section className="form-section">
                        <h3>{t.sections.mindset}</h3>
                        <div className="form-group">
                            <label>{t.fields.history.label} *</label>
                            <textarea required name="history" value={formData.history} onChange={handleChange} placeholder={t.fields.history.placeholder} rows="2"></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.idealPartner.label} *</label>
                            <textarea required name="idealPartner" value={formData.idealPartner} onChange={handleChange} placeholder={t.fields.idealPartner.placeholder} rows="2"></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.therapy.label}</label>
                            <textarea name="therapy" value={formData.therapy} onChange={handleChange} placeholder={t.fields.therapy.placeholder} rows="2"></textarea>
                        </div>
                    </section>

                    {/* 5. Commitment & Logistics */}
                    <section className="form-section">
                        <h3>{t.sections.commitment}</h3>
                        <div className="form-group">
                            <label>{t.fields.invest.label} *</label>
                            <select required name="invest" value={formData.invest} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="Yes">{t.fields.invest.options.yes}</option>
                                <option value="No">{t.fields.invest.options.no}</option>
                                <option value="Unsure">{t.fields.invest.options.unsure}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.program.label}</label>
                            <select name="program" value={formData.program} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="Foundation">{t.fields.program.options.foundation}</option>
                                <option value="Complete">{t.fields.program.options.complete}</option>
                                <option value="Unsure">{t.fields.program.options.unsure}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{t.fields.source.label}</label>
                            <input type="text" name="source" value={formData.source} onChange={handleChange} placeholder={t.fields.source.placeholder} />
                        </div>
                        <div className="form-group">
                            <label>{t.fields.other.label}</label>
                            <textarea name="other" value={formData.other} onChange={handleChange} placeholder={t.fields.other.placeholder} rows="2"></textarea>
                        </div>
                    </section>

                    {/* Consent */}
                    <section className="form-section consent-section">
                        <label className="checkbox-container">
                            <input required type="checkbox" name="consentTherapy" checked={formData.consentTherapy} onChange={handleChange} />
                            <span className="checkmark"></span>
                            <span className="checkbox-text">{t.consent.notTherapy}</span>
                        </label>
                        <label className="checkbox-container">
                            <input required type="checkbox" name="consentCommitted" checked={formData.consentCommitted} onChange={handleChange} />
                            <span className="checkmark"></span>
                            <span className="checkbox-text">{t.consent.committed}</span>
                        </label>
                        <label className="checkbox-container">
                            <input required type="checkbox" name="consentConsultation" checked={formData.consentConsultation} onChange={handleChange} />
                            <span className="checkmark"></span>
                            <span className="checkbox-text">{t.consent.consultation}</span>
                        </label>
                    </section>

                    {/* Error Message */}
                    {status === 'error' && (
                        <div className="error-message">
                            <AlertCircle size={20} />
                            <span>{t.error}</span>
                        </div>
                    )}

                    {/* Submit */}
                    <div className="submit-container">
                        <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? (
                                <div className="flex items-center gap-2">
                                    <Loader className="animate-spin" size={20} />
                                    {t.submitting}
                                </div>
                            ) : t.submit}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Apply;
