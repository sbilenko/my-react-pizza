import React from 'react';

// class Button extends React.Component {
//     render() {
//         return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>;
//     }
// }

function Button(props) {
    console.log(props);
    return (
        <button 
        onClick={props.onClick}
        className={`button ${props.outline ? 'button--outline' : ''}`}>{props.children}
        </button>
    )
}
export default Button;
