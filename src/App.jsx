//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Contact from "./components/Contact/Contact"
import Cart from "./components/Cart/Cart"
import ItemCart from "./components/ItemCart/ItemCart"


//Context
import { DarkModeProvider } from "./context/DarkModeContext"

//Toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {


    return (
        <>
            <BrowserRouter>
                <DarkModeProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/category/:idCategory" element={<ItemListContainer />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element = {<Cart />}/>
                    </Routes>
                    <ToastContainer />
                </DarkModeProvider>
            </BrowserRouter>
        </>
    )
}

export default App;