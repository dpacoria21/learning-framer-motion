import {motion} from 'framer-motion';

export const HomePage = () => {
    return (
        <motion.div
            style={{
                fontSize: 40,
                background: '#f49d0c',
                height: '600px'
            }}
            animate={{x: [-100, 0], opacity: [0, 1]}}
            transition={{duration: 0.5}}
            exit={{x: [0, 100], opacity: 0}}
        >
            <h1>Home Page</h1>
        </motion.div>
    );
};
