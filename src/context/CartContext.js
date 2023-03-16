import { useContext, createContext , useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) =>{
    const [cart,setCart] = useState([])

    //Add product
    //Delete product
    //Total purchase´s price

    //Total product amount in cart
    // if product exist in the cart

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)

    }
    console.log(isInCart())

    //Empty cart
    
    const emptyCart = () => {
        setCart([])
    }

    //Add product

    const addItem = (product , ammount) => {
        if(isInCart()){
            const index = cart.findIndex(prod => prod.id === product.id)
            const aux = {...cart}
            aux[index].amm = ammount
            setCart(aux)
        } else {
            const prodCart = {
                ...product,
                amm : ammount
            }

            setCart([...cart , prodCart])

        }
    }
    console.log(cart)


    //Remove product

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    //Total number of product in cart

    const getItemQuantity = () => {
        return cart.reduce((acum , prod) => acum += prod.amm, 0)
    }

    //Total Price

    const totalPrice = () => {
        return cart.reduce((acum,prod) => acum += (prod.amm * prod.price),0)
    }


    return (
        <CartContext.Provider value={{cart , addItem , removeItem , emptyCart , getItemQuantity , totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )

}