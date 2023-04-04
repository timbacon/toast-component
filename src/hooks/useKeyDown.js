import React from 'react';

const useKeyDown = (code, callback) => {
    React.useEffect(() => {
        const handleKeyPress = event => {
            if (event.code === code) {
                callback();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [code, callback]);
};

export default useKeyDown;
