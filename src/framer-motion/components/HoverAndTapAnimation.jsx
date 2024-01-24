import {motion} from 'framer-motion';
import { useState } from 'react';

export const HoverAndTapAnimation = () => {

    const [showCard, setShowCard] = useState(true);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'grey',
                height: 700
            }}
        >
        
            <motion.div
                style={{
                    background: '#fff',
                    padding: '3rem 2rem',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                }}
                whileHover={{
                    scale: 1.3
                }}
                transition={{
                    layout: {
                        duration: 1,
                        type: 'spring'
                    }
                }}
                layout
                onClick={() => setShowCard(!showCard)}
            >
                <motion.h3>
                    Hover or Click
                </motion.h3>
                {showCard && (
                    <motion.p
                        style={{width: '600px'}}
                        animate={{x: [0, 1]}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam sunt libero sequi quae quam perferendis voluptatum illum nemo. Fugiat eos cupiditate ex architecto harum quas repellat, itaque sit accusantium!
                    </motion.p>
                )}
            </motion.div>
        
        </div>
    );
};
