import React from 'react'
import CokeZero from '../assets/images/co1.jpg'
import Coke from '../assets/images/co2.jpg'
import CokeLight from '../assets/images/co3.jpg'
import '../assets/styles/products.scss'

const Products = () => {
    return (
        <div className="products">
            <div className="product">
                <div className="product__image">
                    <img src={CokeZero} alt="Coca-Cola Zero" />
                </div>
                <div className="product__text">
                    <h4>Coca-cola sin azúcar</h4>
                    <p>La bebida que siempre has estado esperando.</p>
                </div>
            </div>
            <div className="product">
                <div className="product__image">
                    <img src={Coke} alt="Coca-Cola" />
                </div>
                <div className="product__text">
                    <h4>Coca-cola</h4>
                    <p>La de siempre, original y deliciosa, la que refresca a millones de personas en todo el mundo.</p>
                </div>
            </div>
            <div className="product">
                <div className="product__image">
                    <img src={CokeLight} alt="Coca-Cola Light" />
                </div>
                <div className="product__text">
                    <h4>Coca-cola Light</h4>
                    <p>Una variante ligera de Coca-Cola, sin azúcares, sin calorías.</p>
                </div>
            </div>
        </div>
    )
}

export default Products