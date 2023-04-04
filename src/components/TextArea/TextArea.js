import React from 'react';

import styles from './TextArea.module.css';

function TextArea({ value, setValue, ...delegated }) {
    const id = React.useId();
    return (
        <>
            <label
                htmlFor={id}
                className={styles.label}
                style={{ alignSelf: 'baseline' }}
            >
                Message
            </label>
            <div className={styles.inputWrapper}>
                <textarea
                    {...delegated}
                    id={id}
                    className={styles.messageInput}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </>
    );
}

export default TextArea;
