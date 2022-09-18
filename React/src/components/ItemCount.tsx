import React from "react";

export interface ItemCountProp {
    itemCount?: number
}

function ItemCount({itemCount}: ItemCountProp) {
    return (
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Siparişleriniz</span>
            <span className="badge bg-secondary rounded-pill text-white">
                {itemCount}
            </span>
        </h4>
    )
}

export default ItemCount;