import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemLIst/ItemList";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";



const ItemListContainer = () => {
    const [products , setProducts] = useState([])
    const {idCategory} = useParams()
    const {darkMode} = useDarkModeContext()
    useEffect(() =>  {
        if (idCategory){
            fetch("../json/productos.json")
            .then(response => response.json())
            .then(items => {
                const productos = items.filter(prod => prod.nombre === idCategory)
                const productsList = <ItemList products={productos} template={'item'}/> // Product in JSX
                setProducts(productsList)
            })
        }
        else{
            fetch("./json/productos.json")
            .then(response => response.json())
            .then(productos => {
                const productsList = <ItemList products={productos} template={'item'}/> // Products in JSX
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
