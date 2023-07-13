import React from 'react';

import classnames from 'classnames';

function Button({ className, outline, children }) {
    return (
        <button
            className={classnames('button', className, {
                'button--outline': outline,
            })}
        >
            {children}
        </button>
    );
}
export default Button;
