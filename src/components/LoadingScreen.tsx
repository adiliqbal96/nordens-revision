import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: '#f8fafc',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{ width: '120px', marginBottom: '1.5rem' }}
                    >
                        <img src="/src/assets/logo.png" alt="Loading Logo" style={{ width: '100%', height: 'auto' }} />
                    </motion.div>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            height: '2px',
                            backgroundColor: '#0d9488',
                            borderRadius: '2px'
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
