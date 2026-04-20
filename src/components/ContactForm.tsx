import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/xlgalzoz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="contact-form-container">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="success-message"
                        style={{ textAlign: 'center', padding: '4rem 0' }}
                    >
                        <CheckCircle size={48} color="var(--accent)" style={{ marginBottom: '1.25rem' }} />
                        <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tak for din besked</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '300px', margin: '0 auto 1.75rem' }}>
                            Vi vender tilbage inden for én hverdag — typisk hurtigere.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn btn-outline"
                            style={{ fontSize: '0.875rem' }}
                        >
                            Send en ny besked
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="premium-form"
                    >
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Navn</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Dit fulde navn"
                                />
                            </div>
                            <div className="form-group">
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="navn@firma.dk"
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginTop: '1.25rem' }}>
                            <label>
                                Telefon
                                <span style={{ fontWeight: 400, color: 'var(--text-muted)', marginLeft: '0.4rem', fontSize: '0.8rem' }}>— valgfrit</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+45 00 00 00 00"
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: '1.25rem' }}>
                            <label>Hvad drejer det sig om?</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Fortæl kort hvad du har brug for. Fx bogføring, årsrapport, momsindberetning, løn eller erklæring til Færdselsstyrelsen..."
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: '#c0392b', fontSize: '0.875rem' }}
                            >
                                <AlertCircle size={16} />
                                <span>Noget gik galt. Prøv igen eller ring til os på +45 50 69 69 17.</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'loading'}
                            style={{
                                marginTop: '2rem',
                                width: '100%',
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '1rem',
                                fontSize: '0.9375rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.6rem',
                                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                opacity: status === 'loading' ? 0.7 : 1,
                            }}
                        >
                            {status === 'loading' ? 'Sender...' : <><Send size={15} /> Send din besked</>}
                        </button>

                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.875rem', lineHeight: 1.5 }}>
                            Vi vender tilbage inden for én hverdag.
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>

            <style>{`
                .premium-form {
                    /* card styling handled by ContactPage wrapper */
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }
                @media (max-width: 560px) {
                    .form-grid { grid-template-columns: 1fr; }
                }
                .form-group label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--text-main);
                    font-family: var(--font-main);
                    letter-spacing: -0.01em;
                }
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 0.8rem 1rem;
                    background: var(--bg-base);
                    border: 1px solid var(--border);
                    border-radius: 4px;
                    color: var(--text-main);
                    font-family: var(--font-body);
                    font-size: 0.9375rem;
                    transition: border-color 0.18s ease, box-shadow 0.18s ease;
                    -webkit-appearance: none;
                }
                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--accent);
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(26, 112, 101, 0.08);
                }
                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: var(--text-muted);
                    opacity: 0.7;
                }
                .form-group textarea {
                    resize: vertical;
                    min-height: 120px;
                    line-height: 1.65;
                }
            `}</style>
        </div>
    );
};

export default ContactForm;
