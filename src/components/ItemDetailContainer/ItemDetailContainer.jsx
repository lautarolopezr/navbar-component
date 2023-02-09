import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [product , setProduct] = useState([])
    const {id} = useParams()

    useEffect(() =>  {
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === parseInt(id))
            console.log(item)
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
