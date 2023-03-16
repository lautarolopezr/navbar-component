//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import React from "react"


//Components
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Contact from "./components/Contact/Contact"
import Cart from "./components/Cart/Cart"
import ItemCart from "./components/ItemCart/ItemCart"
import Checkout from "./components/Checkout/Checkout"


//Firebase

import { updateProduct, deletePorduct } from "./firebase/firebase"

//Context
import { DarkModeProvider } from "./context/DarkModeContext"
import { CartProvider } from "./context/CartContext"

//Toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <DarkModeProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/item/:id" element={<ItemDetailContainer />} />
                            <Route path="/category/:idCategory" element={<ItemListContainer />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                        <ToastContainer />
                    </DarkModeProvider>
                </CartProvider>
            </BrowserRouter>
        </>
    )
}

export default App;