import Item from "../components/Item/Item";

const ItemList = ({products}) => {
    
    
    return (
        <>
            {products.map(producto => <Item item = {producto}/>)}        
        </>
    );
}

export default ItemList;
