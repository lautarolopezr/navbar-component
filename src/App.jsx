import {BrowserRouter , Routes , Route} from "react-router-dom"
import "./App.css"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


const App = () =>{


    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element = {<ItemListContainer/>}/>
        <Route path="/item/:id" element = {<ItemDetailContainer/>}/>
        <Route path="/category/:idCategory" element = {<ItemListContainer/>}/>
        </Routes>
        </BrowserRouter>
    </>
    )
}

export default App;