import React from 'react';
import SFLItem from './SFLItem';


export default function SavedForLater() {


    return (
        <div className="sfl__container">
            <div className="sfl__container-header">
                <h4>Saved Items</h4>
            </div>
            <SFLItem />
        </div>
    )
}