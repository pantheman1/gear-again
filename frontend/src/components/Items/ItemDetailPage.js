import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';



export default function ItemDetailPage() {
    const user = useSelector(state => state?.session.user);
    const items = useSelector(state => Object.values(state.items));
    const { id } = useParams();

    console.log("id---------", id)


    return (
        <>
            <h1>Item Details</h1>
            {id}
            {user.id}
        </>
    )
}