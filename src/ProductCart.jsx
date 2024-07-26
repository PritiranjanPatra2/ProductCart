import React, { useState } from 'react';
import './ProductCart.css'; 

function ProductCart() {
    const [cart, setCart] = useState([
        { id: 1, name: "Product-1", price: 100, quan: 0 },
        { id: 2, name: "Product-2", price: 200, quan: 0 },
        { id: 3, name: "Product-3", price: 300, quan: 0 },
    ]);
    const [total, setTotal] = useState(0);
    const [addedCart, setAddedCart] = useState([]);

    function increment(index) {
        let newCart = [...cart];
        if (newCart[index].quan >= 0) {
            newCart[index].quan++;
            setCart(newCart);
        }
        let newTotal = 0;
        for (let i = 0; i < newCart.length; i++) {
            newTotal += newCart[i].price * newCart[i].quan;
        }
        setTotal(newTotal);

        let newAddedCart = newCart.filter(item => item.quan > 0);
        setAddedCart(newAddedCart);
    }

    function decrement(index) {
        let newCart = [...cart];
        if (newCart[index].quan > 0) {
            newCart[index].quan--;
            setCart(newCart);
        }
        let newTotal = 0;
        for (let i = 0; i < newCart.length; i++) {
            newTotal += newCart[i].price * newCart[i].quan;
        }
        setTotal(newTotal);

        let newAddedCart = newCart.filter(item => item.quan > 0);
        setAddedCart(newAddedCart);
    }

    return (
        <>
            <div className="productList">
                <h1>Products</h1>
                {cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <button onClick={() => { decrement(index) }}>-</button>
                            <button>{item.quan}</button>
                            <button onClick={() => { increment(index) }}>+</button>
                        </div>
                    )
                })}
            </div>
            <div className='Cart'>
                <h1>Cart</h1>
                {addedCart.length === 0 ? <p>No Product added to the cart</p> : null}
                {addedCart.map((item, index) => {
                    return (
                        <div key={index}>
                            <span>{item.name}</span>
                            <span>{item.price} x {item.quan}</span>
                        </div>
                    )
                })}
                <h1 className="total">Total: {total}</h1>
            </div>
        </>
    )
}

export default ProductCart;
