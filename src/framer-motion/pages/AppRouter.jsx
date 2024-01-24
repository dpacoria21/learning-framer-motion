import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import {AnimatePresence} from 'framer-motion';

import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';

export const AppRouter = () => {

    const location = useLocation();

    return (
        <>
            <ul key={'1'}>
                <li>
                    <NavLink to={'/home'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>

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
