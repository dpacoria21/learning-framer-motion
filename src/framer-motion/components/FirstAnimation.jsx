import { motion } from 'framer-motion';


export const FirstAnimation = () => {
    return (
        <>
            <motion.h1
                // initial={{x:-1000}}
                animate={{ x: [-300, 0] }}
                transition={{
                    // duration: 0.5,
                    // delay: 1
                }}
                whileHover={{opacity: 0.8, scale: 1.2}}
                whileTap={{scale: 0.8}}
                style={{textAlign: 'center'}}
            > 
                Framer Motion 
            </motion.h1>
        </>
    );
};
