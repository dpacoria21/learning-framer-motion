import {motion} from 'framer-motion';

export const AboutPage = () => {
    return (
        <motion.div
            style={{
                fontSize: 40,
                background: '#0abd6f',
                height: '600px'
            }}
            animate={{x: [100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5}}
            exit={{y: [0, -100], opacity: 0}}
        >
            <h1>About Page</h1>
        </motion.div>
    );
};
