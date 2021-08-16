import React from 'react'

const Cart = ({ basket, onAdd }) => {

    return (
        <aside className="col-sm-12 border mt-5 mb-5" style={{ width: "60rem" }}>
            <p>Cart item</p>
            <div>
                {basket.length === 0 ? <div>Cart is empty </div> :
                    <div>
                        {basket.map(item => <div key={item.id}> <div>{item.name}</div> <div>{item.counter} x {item.price} = ${item.counter * item.price}</div>
                        </div>)}
                    </div>}
            </div>
        </aside>
    )
}

export default Cart;
