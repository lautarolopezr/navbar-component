import React from 'react';

const ItemCart = ({item}) => {
    return (
        <div className='card mb-3 cardCart'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`/img/${item.img}`} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className='card-title'>{item.name}</h5>
                        <p className='card-text'>Ammount : {item.ammount}</p>                        
                        <p className='card-text'>Unit Price : ${new Intl.NumberFormat("de-DE").format(item.price)}</p>
                        <p className='card-text'>Subtotal : ${new Intl.NumberFormat("de-DE").format(item.price * item.ammount)}</p>
                        <button className='btn btn-danger' onClick={() => "Borrar Producto"}>Delete Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
