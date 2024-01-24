import { Box } from './Box';

export const ScrollAnimationTrigger = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 650,
        }}>
            <h2>React Scroll Animation with Framer Motion</h2>
            <Box />
            <Box />
            <Box />
        </div>
    );
};
