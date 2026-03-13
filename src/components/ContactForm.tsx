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
            const response = await fetch('/mail.php', {
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
        } catch (error) {
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
                        <CheckCircle size={64} color="var(--accent-light)" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ color: 'white' }}>Tak for din besked!</h3>
                        <p style={{ color: '#94a3b8' }}>Vi vender tilbage til dig hurtigst muligt.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn btn-outline"
                            style={{ marginTop: '2rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
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

                        <div className="form-group" style={{ marginTop: '1.5rem' }}>
                            <label>Telefon (valgfrit)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+45 00 00 00 00"
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: '1.5rem' }}>
                            <label>Besked</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Hvordan kan vi hjælpe dig?"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: '#f87171' }}
                            >
                                <AlertCircle size={18} />
                                <span>Der opstod en fejl. Prøv venligst igen senere.</span>
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'loading'}
                            style={{
                                marginTop: '2.5rem',
                                width: '100%',
                                backgroundColor: 'var(--accent)',
                                color: 'white',
                                padding: '1.25rem'
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === 'loading' ? 'Sender...' : (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    Send besked <Send size={18} />
                                </span>
                            )}
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>

            <style>{`
                .premium-form {
                    background: #ffffff;
                    padding: 3.5rem;
                    border-radius: 2rem;
                    border: 1px solid var(--border);
                    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.08);
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .form-group label {
                    display: block;
                    font-size: 0.935rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: var(--primary);
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 1.15rem;
                    background: var(--bg-offset);
                    border: 1px solid var(--border);
                    border-radius: 0.875rem;
                    color: var(--primary);
                    font-family: inherit;
                    transition: var(--transition);
                }
                .form-group input:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--accent);
                    background: #ffffff;
                    box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.05);
                }
                .form-group input::placeholder, .form-group textarea::placeholder {
                    color: #94a3b8;
                }
                .success-message h3 {
                    color: var(--primary) !important;
                }
                .success-message p {
                    color: var(--text-muted) !important;
                }
            `}</style>
        </div>
    );
};

export default ContactForm;
