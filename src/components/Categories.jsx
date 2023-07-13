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
//         const { items, onSelectItem } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     {/* <li className="active">Все</li> */}
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

function Categories({ items, onClickItem }) {
    // const [count, setCount] = useState(0);
    // const newNumber = () => setCount(prevState => prevState + 1);

    return (
        <div className="categories">
            <ul>
                {/* <li className="active">Все</li> */}
                {items.map((name, index) => (
                    <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
            {/* <button onClick={newNumber}>{`count is ${count}`}</button> */}
        </div>
    );
}

export default Categories;
