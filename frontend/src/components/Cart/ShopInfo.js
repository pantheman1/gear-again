import React from "react";
import { Input, Collection } from "usetheform";

export function ShopInfo() {
    return (
        <div className="field is-grouped">
            <Collection object name="info">
                <div className="field control">
                    <label className="label is-small">Total Price</label>
                    <Input
                        className="input is-small"
                        disabled
                        type="text"
                        value="0"
                        name="totalPrice"
                        readOnly
                    />
                </div>
                <div className="field control">
                    <label className="label is-small">Total Items</label>
                    <Input
                        className="input is-small"
                        disabled
                        type="text"
                        value="0"
                        name="totalItems"
                        readOnly
                    />
                </div>
                <div className="field control">
                    <label className="label is-small">Total Quantities</label>
                    <Input
                        className="input is-small"
                        disabled
                        type="text"
                        value="0"
                        name="totalQty"
                        readOnly
                    />
                </div>
            </Collection>
        </div>
    );
}