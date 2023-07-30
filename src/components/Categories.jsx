import React, { useState } from 'react';

// class Categories extends React.Component {
//     state = {
//         activeItem: 0,
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         });
//     };

//     render() {
//         const { items } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     {items.map((name, index) => (
//                         <li
//                             className={this.state.activeItem === index ? 'active' : ''}
//                             onClick={() => this.onSelectItem(index)}
//                             key={`${name}_${index}`}
//                         >
//                             {name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

function Categories({ items }) {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = index => {
        setActiveItem(index);
    };

    return (
        <div className="categories">
            <ul>
                {items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
