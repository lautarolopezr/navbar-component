import ItemCount from '../Navbar/ItemCount/ItemCount';
import React from 'react';

const ItemDetail = ({ item }) => {

    const onAdd = (ammount) => {
        console.log(ammount)
        console.log(item)
    }
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt={`${item.nombre}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.modelo}</p>
                    <p className="card-text">{item.marca}</p>
                    <p className="card-text">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                    <p className="card-text">Stock {item.stock}</p>
                    <ItemCount initvalue={1} stock={item.stock} onAdd={onAdd} />
                    <button className="btn btn-success">Purchase</button>

                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
