import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

import Toast from '../Toast';
import { ToastsContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
    const { toasts = [], clearToasts } = React.useContext(ToastsContext);
    useEscapeKey(clearToasts);

    return (
        <ol
            className={styles.wrapper}
            role='region'
            aria-live='polite'
            aria-label='Notification'
        >
            {toasts.map(({ id, message, variant }) => {
                return (
                    <li key={id} className={styles.toastWrapper}>
                        <Toast variant={variant} id={id}>
                            {message}
                        </Toast>
                    </li>
                );
            })}
        </ol>
    );
}

export default ToastShelf;
