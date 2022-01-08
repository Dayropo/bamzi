import React, { useState } from "react"
import { IoIosCart } from "react-icons/io"
import { FaStoreAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Footer from "../components/footer"
import Header from "../components/header"
import styles from "../styles/product.module.css"
import Tab from "../components/tab"
import RelatedProducts from "../components/relatedProducts"

export default function ProductDetails() {
  const products = [
    {
      _id: "1",
      title: "Apple Watch 2.0 Ipv4",
      price: 399,

      views: [
        require("../assets/apple-watch-img01.png"),
        require("../assets/apple-phone-img01.png"),
        require("../assets/apple-pods-img01.png"),
      ],
      variants: {
        src: [
          require("../assets/apple-watch-img01.png"),
          require("../assets/apple-watch-img02.png"),
          require("../assets/apple-watch-img03.png"),
        ],
        colors: ["grey", "red", "blue"],
      },

      sizes: ["XL", "XXL", "M"],
      stock: 0,
      brand: "Apple",
      category: "Electronics",
      subCategory: "Bands",
      seller: "Evax Electronic Store",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda impedit officia. Asperiores, dolor. Tempora, pariatur velit voluptatum voluptatibus dolores soluta earum qui saepe quaerat asperiores enim aut sequi unde?",
      reviews: [],
    },
  ]

  const [index, setIndex] = useState(0)

  const changeImg = index => {
    setIndex(index)
  }

  const prevView = () => {
    setIndex(index === 0 ? products[0].views.length - 1 : index - 1)
  }

  const nextView = () => {
    setIndex(index === products[0].views.length - 1 ? 0 : index + 1)
  }

  return (
    <>
      <Header />
      <div className="container">
        {products.map(product => (
          <div key={product._id}>
            <div className="row justify-content-center my-5">
              <div className="col-md-6 my-3">
                <div className="row">
                  <div className="col-2">
                    {product.views.map((img, index) => (
                      <img
                        src={img}
                        alt=""
                        key={index}
                        className={styles.views}
                        role="button"
                        onClick={() => changeImg(index)}
                      />
                    ))}
                  </div>
                  <div className="col-10">
                    <img
                      src={product.views[index]}
                      className="img-fluid mx-auto d-block"
                      width={"200px"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex mt-5 justify-content-end">
                  <button
                    className="btn btn-outline rounded-circle shadow-sm me-2"
                    onClick={prevView}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="btn btn-outline rounded-circle shadow-sm"
                    onClick={nextView}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <nav
                  // style={"--bs-breadcrumb-divider: '>';"}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#!" className="text-decoration-none">
                        {product.category}
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!" className="text-decoration-none">
                        {product.brand}
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {product.subCategory}
                    </li>
                  </ol>
                </nav>
                {product.stock ? (
                  <span className="bg-primary text-center text-light py-2 px-4">
                    IN STOCK
                  </span>
                ) : (
                  <span className="bg-secondary text-center text-light py-2 px-4">
                    OUT OF STOCK
                  </span>
                )}
                <h4 className="fw-bold mt-2 text-primary">{product.title}</h4>
                <h2 className="fw-bolder mt-2 text-warning">{`$${product.price}`}</h2>
                <div className="d-flex mt-3">
                  {product.variants.src.map((img, index) => (
                    <img src={img} alt="" key={index} className={styles.img} />
                  ))}
                </div>
                <div className="d-lg-flex mt-3">
                  <div className="d-flex">
                    <span className="fw-bold text-primary me-2 py-1">
                      Color
                    </span>
                    {product.variants.colors.map((color, index) => (
                      <button
                        className={`me-1 ${styles.colors}`}
                        style={{ background: color }}
                        key={index}
                      ></button>
                    ))}
                  </div>
                  <div className="d-flex mt-2 mt-lg-0">
                    <span className="fw-bold text-primary ms-lg-4 me-2 py-1">
                      Size
                    </span>
                    {product.sizes.map((size, index) => (
                      <span
                        className="fw-bold text-secondary text-center py-1 px-3 bg-light rounded-pill me-2"
                        key={index}
                        role="button"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                {/* counter component */}
                <button className="btn btn-primary rounded my-3 text-center text-light py-2 px-4 d-flex">
                  <IoIosCart size={24} className="me-1" /> Add to Cart
                </button>
                <span className="text-secondary">
                  <FaStoreAlt className="me-1" /> {product.seller}
                </span>
              </div>
            </div>
            <Tab product={products[0]} />
          </div>
        ))}
      </div>
      <RelatedProducts />
      <Footer />
    </>
  )
}
