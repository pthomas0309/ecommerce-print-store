import React from "react";

/* ProductList is a function component displaying
a grid of sections, each with information an a product.
This list can be sorted under certain parameters and 
what is rendered is dependent on the array that's stored 
in redux. */
export default function ProductList() {

    return (
        <div>
            <h1>Enchiryd's Crypt</h1>

            {['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipicing', 'Elit', 'Sed'].map( product => {
                return (
                    <div>
                        {product}
                    </div>
                )
            })}
        </div>
    )
}