import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import {AnimatePresence, motion} from 'framer-motion';

import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';

export const AppRouter = () => {

    const location = useLocation();

    return (
        <>
            {/* <motion.div
                layout
            > */}

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: 50
            }}>
                <li style={{
                    position: 'relative'
                }}>
                    <NavLink  style={{
                        textDecoration: 'none',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#f7d5a2'
                    }} to={'/home'}>
                        {({ isActive }) => (
                            <div>
                                    Home
                                {isActive ? (<motion.div
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: 5,
                                        top: '120%',
                                        backgroundColor: '#555555'
                                    }}
                                    layoutId='indicator'
                                >
                                </motion.div>) : ''}
                            </div>
                        )}
                    </NavLink>
                </li>
                <li style={{
                    position: 'relative'
                }}>
                    <NavLink style={{
                        textDecoration: 'none',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#f7d5a2'
                    }} to={'/about'}>
                        {({ isActive }) => (
                            <div>
                                    About
                                {isActive ? (<motion.div
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: 5,
                                        top: '120%',
                                        backgroundColor: '#555555'
                                    }}
                                    layoutId='indicator'
                                >
                                </motion.div>) : ''}
                            </div>
                        )}
                    </NavLink>
                </li>
                <li style={{
                    position: 'relative'
                }}>
                    <NavLink style={{
                        textDecoration: 'none',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#f7d5a2'
                    }} to={'/contact'}>
                        {({ isActive }) => (
                            <div>
                                    Contact
                                {isActive ? (<motion.div
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: 5,
                                        top: '120%',
                                        backgroundColor: '#555555'
                                    }}
                                    layoutId='indicator'
                                >
                                </motion.div>) : ''}
                            </div>
                        )}
                    </NavLink>
                </li>
            </ul>
            {/* </motion.div> */}

            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='home' element={<HomePage />}/>
                    <Route path='about' element={<AboutPage />}/>
                    <Route path='contact' element={<ContactPage />}/>
                    <Route path='/*' element={<Navigate to={'/home'}/>}/>
                </Routes>
            </AnimatePresence>
        </>
    );
};
