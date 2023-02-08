import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemLIst/ItemList";

const ItemListContainer = () => {
    const [products , setProducts] = useState([])
    const {idCategory} = useParams()

    useEffect(() =>  {
        if (idCategory){
            fetch("../json/productos.json")
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategory === parseInt(idCategory))
                const productsList = ItemList({products}) // Product in JSX
                setProducts(productsList)
            })
        }
        else{
            fetch("./json/productos.json")
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products}) // Products in JSX
                setProducts(productsList)
            })
        }
    }, [idCategory])
    return (
        <div className="row card_products">
            {products}
        </div>
    );
}

export default ItemListContainer;
