import {motion, useAnimate, usePresence} from 'framer-motion';
import { useEffect } from 'react';

export const ManualControling = () => {

    const [scope, animate] = useAnimate();
    const [isPresent, safeToRemove] = usePresence();
    
    useEffect(() => {
        if(isPresent) {
            const animation = async() => {
                // animate('li', {opacity: 0}, {opacity: 1});
                await animate('li', {opacity: 0});
                await animate(scope.current, {x: ['100%', '0%']});
                await animate('li', {opacity: 1});
                
                // await animate(scope.current, {x: 0});
            };
            animation();
        }else {
            const exitAnimation = async() => {
                await animate('li', {opacity: 0});
                await animate(scope.current, {x: ['0%', '-100%']});
                safeToRemove();
            };
            exitAnimation();
        }

    }, [isPresent]);

    return (
        <>
            <motion.ul ref={scope} style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                background: '#a5b3f9',
                padding: 20,
                gap: 50
            }}>
                {[1,2,3,4].map((elem) => (
                    <motion.li  key={elem}>
                        <a style={{
                            textDecoration: 'none',
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: '#f7d5a2'
                        }} href='#'>Click here</a>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
};
