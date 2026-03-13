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
                        backgroundColor: '#ffffff', // Pure white background
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{ width: '200px', marginBottom: '2rem' }} // Larger logo width
                    >
                        <img
                            src="/src/assets/logo.png"
                            alt="Loading Logo"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '150px' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            height: '3px',
                            backgroundColor: '#0d9488', // Teal accent
                            borderRadius: '3px'
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
