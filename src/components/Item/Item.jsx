import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Item = ({item}) => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className={`card mb-3 ${darkMode ? "text-white bg-secondary cardProductoDark" : "border-light cardProducto"}`}>
            <img src={item.img} className="card-img-top mb-3" alt={item.nombre} />
            <div className= {`${darkMode ? "cardBodyDark" : "cardBody"}`}>
                <h4 className="card-title ">{item.name} {item.modelo}</h4>
                <h5 className="card-title">{item.marca}</h5>
                <p className="card-text">${new Intl.NumberFormat("de-DE").format(item.price)}</p>
                <Link className="btn btn-dark" to = {`/item/${item.id}`} >See Product</Link>
            </div>
        </div>

    );
}

export default Item;
