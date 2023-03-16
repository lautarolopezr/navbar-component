import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [product , setProduct] = useState([])
    const {id} = useParams()

    useEffect(() =>  {
        getProduct(id)
        .then(item => {
            setProduct(item)
        })
    }, [])
    return (
        <div>
            <ItemDetail item = {product}/>
        </div>
    );
}

export default ItemDetailContainer;
