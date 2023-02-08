import { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [product , setProduct] = useState([])


    useEffect(() =>  {
        fetch("./json/productos.json")
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === 1 )
            setProduct(item)
        })
    }, [])
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item = {product}/>
        </div>
    );
}

export default ItemDetailContainer;
