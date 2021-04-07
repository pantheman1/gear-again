import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneItem } from '../../store/items';



export default function ItemDetailPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.session.user);
    const { id } = useParams();

    useEffect(() => {
        const data = { id, userId: user.id }
        dispatch(getOneItem(id))
    }, [])

    return (
        <>
            <h1>Item Details</h1>
            {id}
            {user.id}
        </>
    )
}