import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemLIst/ItemList";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";

// Firebase

import { getProducts } from "../../firebase/firebase";

const ItemListContainer = () => {
    const [products , setProducts] = useState([])
    const {idCategory} = useParams()
    const {darkMode} = useDarkModeContext()
    useEffect(() =>  {
        if (idCategory){
            getProducts()
            .then(items => {
                const productos = items.filter(prod => prod.stock > 0).filter(prod => prod.type === idCategory)
                const productsList = <ItemList products={productos} template={'item'}/> // Product in JSX
                setProducts(productsList)
            })
        }
        else{
            getProducts()
            .then(productos => {
                const productsFilter = productos.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={productsFilter} template={'item'}/> // Products in JSX
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
