// import React from 'react';
// import { useSelector } from 'react-redux';


// export default function SFLItem() {
//     const items = useSelector(state => Object.values(state.items));

//     const handleMoveToCart = (e) => {
//         e.preventDefault();
//     };

//     const handleRemove = e => {
//         e.preventDefault();
//         const data = {
//             itemId: e.target.id,
//             cartItemId: cartItem?.id,
//         }
//         dispatch(removeCartItem(data))
//     }

//     const sflItems = items?.filter(item => item.saved === true);

//     return (
//         items.length > 0 &&
//         <div className="sfl__container-item">
//             {sflItems && sflItems.map(item => (
//                 <ul>
//                     <li key={item.id}>{item.title}</li>
//                     <button onClick={handleMoveToCart}>Move to cart</button>
//                     <button id={item.id} onClick={handleRemove}>Remove from cart</button>
//                 </ul>
//             ))}
//         </div>
//     )
// }