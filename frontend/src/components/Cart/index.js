import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { postItem } from "../../store/cart";


export default function AddToCart() {
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const item = useSelector(state => state?.items[id]);
    const cart = useSelector(state => state?.cart);
    const [buttonTxt, setButtonTxt] = useState("Add item to cart")
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        if (cart[item?.id]) {
            setButtonTxt("Continue to cart");
        }
    }, [])

    const onAddItem = async (e) => {
        e.preventDefault();
        const data = {
            itemId: Number(id),
            qty: 1,
            userId: user?.id
        };
        dispatch(postItem(data))
        setButtonTxt("Continue to cart")
    };

    const navToCart = async (e) => {
        history.push('/cart');
    }

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
