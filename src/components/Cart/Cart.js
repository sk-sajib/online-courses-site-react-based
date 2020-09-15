import React from 'react';


const Cart = (props) => {
    const cart = props.cart

    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price
        
    }
    return (
        <div>
            <h2>Order Summary: </h2>
            <p>Course Enrolled:<strong> {cart.length} </strong></p>
            <p>Price:<strong> ${total} </strong></p>
        </div>
    );
};

export default Cart;