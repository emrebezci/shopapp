import React from 'react'



const product = ({ product, basket, setBasket }) => {

    const basketCounter = basket.find(item => item.id === product.id)
    

    const addBasket = () => {
        const exist = basket.find(item => item.id === product.id)
        if (exist) {
            exist.counter += 1
            setBasket([...basket.filter(item => item.id !== product.id), exist])
        } else {
            setBasket([...basket, { id: product.id, name: product.name, price: product.price, counter: 1 }])
        }
    }


    const deleteBasket = () => {
        const exist = basket.find(item => item.id === product.id)
        if (exist) {
            exist.counter -= 1
            setBasket([...basket.filter(item => item.id !== product.id), exist])
        } else {
            setBasket([...basket, { id: product.id, name: product.name, price: product.price, counter: 0 }])
        }
    }

    return (



        <div className="card" style={{ width: "18rem", display: "block" }} key={product.id}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-header">
                <p style={{ textAlign: "center" }}>{product.name}</p>
            </div>
            <hr />
            <ul className="list-group list-group-flush">
                <ol className="list-group-item" style={{ textAlign: "center" }}>$ {product.price}</ol>
                <button className="btn btn-secondary" onClick={addBasket}> ADD </button>
                <span className="counter" style={{ textAlign: "center" }}>{basketCounter && basketCounter.counter}</span>
                <button className="btn btn-secondary mt-2" onClick={deleteBasket} disabled={basket.length < 1}> DELETE </button>
            </ul>
        </div>


    )
}

export default product
