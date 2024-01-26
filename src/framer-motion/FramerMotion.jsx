import { DragAnimation, ExitEnterAnimation, FirstAnimation, HoverAndTapAnimation, ScrollAnimation } from './components';
import { ScrollAnimationTrigger } from './components/ScrollAnimationTrigger';
import { VariantAndPropagation } from './components/VariantAndPropagation';
import './FramerMotion.css';
import { AppRouter } from './pages/AppRouter';

export const FramerMotion = () => {


    return (
        <>
            <div className='container'>
                <h1>Animations</h1>
                <VariantAndPropagation />
                <div className='separator'></div>
                <FirstAnimation />
                <div className='separator'></div>
                <ExitEnterAnimation />
                <div className='separator'></div>
                <DragAnimation />
                <div className='separator'></div>
                <HoverAndTapAnimation />
                <div className='separator'></div>
                <ScrollAnimation/>
                <div className='separator'></div>
                <ScrollAnimationTrigger />
                <div className='separator'></div>
                <AppRouter />
            </div>
        </>
    );
};
