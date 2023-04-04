import React from 'react';

const useEscapeKey = callback => {
    React.useEffect(() => {
        const handleEscapeKey = event => {
            if (event.code === 'Escape') {
                callback();
            }
        };
        window.addEventListener('keydown', handleEscapeKey);
        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [callback]);
};

export default useEscapeKey;
