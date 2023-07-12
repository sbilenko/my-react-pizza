import React from 'react';

import classnames from 'classnames';

function Button(props) {
    console.log(props);
    return (
        <button
            onClick={props.onClick}
            className={classnames(props.className, {
                'button--outline': props.outline,
            })}
        >
            {props.children}
        </button>
    );
}
export default Button;
