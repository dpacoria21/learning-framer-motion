import {motion, AnimatePresence} from 'framer-motion';
import { useState } from 'react';

export const ExitEnterAnimation = () => {

    const [show, setShow] = useState(true);

    const onShow = () => {
        setShow(!show);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>

            <h1>
                Framer Motion Tutorial: Exit and enter animation
            </h1>

            <AnimatePresence>
                {
                    show &&
                    (
                        <motion.div
                            style={{width: 200, height: 200, backgroundColor: 'blue'}}
                            animate={{x: [0, 50], opacity: [0, 1]}}
                            exit={{opacity: 0, x: -150}}
                        >

                        </motion.div>
                    )
                }
            </AnimatePresence>
            <button style={{padding: 15, outline: 0, border: 2, borderRadius: 10}} onClick={onShow}>
                {show ? 'hidden box' : 'show box'}
            </button>
        </div>
    );
};
