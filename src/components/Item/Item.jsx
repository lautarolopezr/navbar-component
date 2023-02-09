import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={`../img/${item.img}`} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <h4 className="card-title ">{item.nombre} {item.modelo}</h4>
                <h5 className="card-title">{item.marca}</h5>
                <p className="card-text">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                <Link className="btn btn-dark" to = {`/item/${item.id}`} >See Product</Link>
            </div>
        </div>

    );
}

export default Item;
