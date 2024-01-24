import {motion} from 'framer-motion';

export const ContactPage = () => {
    return (
        <motion.div
            style={{
                fontSize: 40,
                background: '#85d6ff',
                height: '600px'
            }}
            animate={{y: [-100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5}}
            exit={{y: [0, 300], opacity: 0}}
        >
            <h1>Contact Page</h1>
        </motion.div>
    );
};
