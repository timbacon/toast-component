import React from 'react';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const addToast = ({ message, variant }) => {
        setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
    };

    const removeToast = id => {
        setToasts(toasts.filter(t => t.id !== id));
    };

    const clearToasts = React.useCallback(() => {
        setToasts([]);
    }, []);

    return (
        <ToastsContext.Provider
            value={{ toasts, addToast, removeToast, clearToasts }}
        >
            {children}
        </ToastsContext.Provider>
    );
}

export default ToastProvider;
