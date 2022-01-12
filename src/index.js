import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import ProductDetails from "./views/productDetails"
import SellersBoard from './views/sellersBoard'

ReactDOM.render(
  <React.StrictMode>
    <SellersBoard />
  </React.StrictMode>,
  document.getElementById("root")
)
