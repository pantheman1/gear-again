import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SalesForm from './SalesForm';



export default function NewListing() {
    const user = useSelector(state => state?.session.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch()
    // }, [])

    return (
        <>
            <SalesForm title="" />
        </>
    )

}