import {motion, AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import { ManualControling } from './ManualControling';

export const VariantAndPropagation = () => {

    const [show, setShow] = useState(true);

    const onShow = () => {
        setShow(!show);
    };

    const listVariants = {
        off: {
            opacity: 0,
            scale: 0,
            transition: {duration: 1, when: 'afterChildren'}
        },
        on: {
            opacity: 1,
            scale: 1,
            transition: {duration: 1, when: 'beforeChildren'},
        }
    };

    const itemVariants = {
        on: i => ({
            opacity: 1, scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 1
            }
        }),
        off: i => ({
            transition: {
                delay: i * 0.1,
                duration: 2
            },
            opacity: 0, scale: 0
        })
    };

    return (
        <>

            <button style={{
                padding: 10,
                outline: 0,
                border: 0,
            }} onClick={onShow}>
                Show
            </button>

            <motion.ul variants={listVariants} initial={false} animate={show ? 'on' : 'off'} style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                background: '#a5b3f9',
                padding: 20,
                gap: 50
            }}>
                {[1,2,3,4].map((elem, i) => (
                    <motion.li variants={itemVariants} custom={i} key={elem}>
                        <a style={{
                            textDecoration: 'none',
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: '#f7d5a2'
                        }} href='#'>Click here</a>
                    </motion.li>
                ))}
            </motion.ul>
            <AnimatePresence>
                {show ? <ManualControling /> : null}
            </AnimatePresence>
        
        </>
    );
};
