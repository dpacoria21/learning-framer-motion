import {motion} from 'framer-motion';

export const DragAnimation = () => {
    return (
        <>
            <h1>Drag animation with Framer Motion</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '200px',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div>
                    <p>No constraint</p>
                    <motion.div
                        style={{
                            width: 100,
                            height: 100,
                            background: '#15b3f8'
                        }}
                        drag
                    >
                    </motion.div>
                </div>
                <div>
                    <p>Drag Y only</p>
                    <motion.div
                        style={{
                            width: 100,
                            height: 100,
                            background: '#15b3f8'
                        }}
                        drag = {'y'}
                        dragConstraints ={{top: -100, bottom: 100}}
                    >
                    </motion.div>
                </div>
                <div>
                    <p>Drag constraint</p>
                    <motion.div
                        style={{
                            width: 100,
                            height: 100,
                            background: '#15b3f8'
                        }}
                        drag
                        dragConstraints={{bottom: 0, top: 0, left: 0, right: 0}}
                    >
                    </motion.div>
                </div>

            </div>
        </>
    );
};
