import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800); // Shorter duration for better UX
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ width: 'clamp(180px, 40vw, 240px)', marginBottom: '2rem' }}
                    >
                        <img
                            src="/src/assets/logo.png"
                            alt="Nordens Revision"
                            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
                        />
                    </motion.div>

                    {/* Green loading bar (streg) */}
                    <div style={{ width: '200px', height: '4px', backgroundColor: 'rgba(13, 148, 136, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                                height: '100%',
                                backgroundColor: 'var(--accent)', // Teal/Green accent
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
