import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getCart, postItem } from "../../store/cart";


export default function AddToCart() {
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const item = useSelector(state => state?.items[id]);
    const cart = useSelector(state => state?.cart);
    const [items, setCartItem] = useState([]);
    const [buttonTxt, setButtonTxt] = useState("Add item to cart")
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        if (cart[item?.id]) {
            setButtonTxt("Continue to cart");
        }
    }, [])

    // console.log("CART ADDTOCART", cart, item, id)

    // const onRemoveItem = (idToRemove) =>
    //     setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove));

    const onAddItem = async (e) => {
        // debugger
        e.preventDefault();
        const data = {
            itemId: Number(id),
            qty: 1,
            userId: user?.id
        };
        // debugger
        console.log("data------", data)

        dispatch(postItem(data))
        setButtonTxt("Continue to cart")
    };

    const navToCart = async (e) => {
        history.push('/cart');
    }

    const onChange = (state, isFormValid) => console.log('CHANGE', state, isFormValid);
    const onSubmit = (state) => console.log('SUBMIT', state);

    return (
        Object.values(item).length > 0 &&
        <div className="App">
            <br />
            <button className="form-btn" type="button" onClick={buttonTxt === "Add item to cart" ? onAddItem : navToCart}>
                {buttonTxt}
            </button>
        </div>
    );
}

// let id = 0;
// const createRandomItem = () => {
//     id = id + 1;
//     return {
//         id,
//         qty: 1,
//         desc: `Item number: ${id}`,
//         price: Number((Math.random() * 10 + 1).toFixed(2))
//     };
// };