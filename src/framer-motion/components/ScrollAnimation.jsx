import {motion, useScroll} from 'framer-motion';

export const ScrollAnimation = () => {

    const {scrollYProgress} = useScroll();


    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    height: '10px',
                    top: 0,
                    left: 0,
                    right: 0,
                    background: 'blue',
                    transformOrigin: '0%'
                }}
            >

            </motion.div>
            <h2>Scroll Animation</h2>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Saludos a todos</p>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Saludos a todos</p>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Saludos a todos</p>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Saludos a todos</p>
            <p style={{marginTop: '20px', marginBottom: '20px'}}>Saludos a todos</p>
        </>
    );
};
