import React from 'react';

import Button from '../Button';
import RadioButton from '../RadioButton/RadioButton';
import TextArea from '../TextArea/TextArea';
import { ToastsContext } from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [variantSelected, setVariantSelected] = React.useState('notice');
    const [isToastShowing, setIsToastShowing] = React.useState(false);
    const { addToast } = React.useContext(ToastsContext);

    const handleSubmit = event => {
        event.preventDefault();
        addToast({ message, variant: variantSelected });
        setMessage('');
        setVariantSelected('notice');
        setIsToastShowing(true);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt='Cute toast mascot' src='/toast.png' />
                <h1>Toast Playground</h1>
            </header>

            {isToastShowing && <ToastShelf />}

            <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <TextArea value={message} setValue={setMessage} />
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map(variant => {
                            return (
                                <RadioButton
                                    key={variant}
                                    group='variantOptions'
                                    label={variant}
                                    value={variant}
                                    checked={variantSelected === variant}
                                    onChange={event =>
                                        setVariantSelected(event.target.value)
                                    }
                                />
                            );
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button type='submit'>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
