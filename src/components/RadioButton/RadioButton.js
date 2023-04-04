import React from 'react';

function RadioButton({ label, group, ...delegated }) {
    const id = React.useId();
    return (
        <label htmlFor={id}>
            <input {...delegated} id={id} type='radio' name={group} />
            {label}
        </label>
    );
}

export default RadioButton;
