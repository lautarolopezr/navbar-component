

const Item = ({item}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={`../img/${item.img}`} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <h4 className="card-title ">{item.nombre} {item.modelo}</h4>
                <h5 className="card-title">{item.marca}</h5>
                <p className="card-text">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                <button className="btn btn-dark">See Product</button>
            </div>
        </div>

    );
}

export default Item;
