import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { useDarkModeContext } from '../../context/DarkModeContext';


const ItemCart = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {removeItem} = useCartContext()
    return (
        <div className={`card mb-3 cardCart ${darkMode ? "cardCartDark" : "" }`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className='card-title'>{item.name}</h5>
                        <p className={`${darkMode ? "text-light" : "text-dark" }`}>Ammount : {item.amm}</p>                        
                        <p className={`${darkMode ? "text-light" : "text-dark" }`}>Unit Price : ${new Intl.NumberFormat("de-DE").format(item.price)}</p>
                        <p className={`${darkMode ? "text-light" : "text-dark" }`}>Subtotal : ${new Intl.NumberFormat("de-DE").format(item.price * item.amm)}</p>
                        <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Delete Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
