import {motion} from 'framer-motion';

export const Box = () => {
    return (
        <motion.div 
            style={{
                width: 250,
                height: 250,
                background: '#f83c86'
            }}
            initial={{opacity: 0, scale: 0, x: 400}}
            whileInView={{opacity: 1, scale: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
        >

        </motion.div>
    );
};
