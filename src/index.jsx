import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/Navbar/ItemListContainer"
import Counter from "./components/Navbar/Counter/Counter"
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render( <div>
  <Navbar></Navbar>
  <Counter/>
</div>
)