import React from "react"
import ReactDOM from "react-dom"
// import "mdb-ui-kit/css/mdb.min.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/main.min.css"
import ProductDetails from "./views/productDetails"

ReactDOM.render(
  <React.StrictMode>
    <ProductDetails />
  </React.StrictMode>,
  document.getElementById("root")
)
