import React from "react"
import { FaStar } from "react-icons/fa"

export default function RelatedProducts() {
  const related = [
    {
      _id: "1",
      image: require("../assets/apple-pods-img01.png"),
      title: "Apple Pods Series Redtooth 5",
      price: 239,
      rating: 4.1,
      intro: "Redesigned from scratch and completely revised.",
    },
    {
      _id: "2",
      image: require("../assets/apple-phone-img01.png"),
      title: "iPhone XIV",
      price: 399,
      rating: 4.4,
      intro: "Latest installment of the iPhone family.",
    },
  ]

  return (
    <div className="container mt-5">
      <h5 className="fw-bold mb-4">Related Products</h5>
      <div className="row">
        {related.map(item => (
          <div
            className="card col-md-4 col-lg-3 me-3 py-3 mb-3 mb-md-0"
            key={item._id}
          >
            <img
              className="card-image-top"
              height={"200px"}
              src={item.image}
              style={{ objectFit: "contain" }}
              alt="item"
            />
            <div className="card-body mt-2">
              <div className="d-flex mb-3">
                <div className="d-flex bg-primary rounded px-3">
                  <p className="text-white mt-1">{item.rating}</p>
                  <FaStar className="text-warning ms-2 mt-2" />
                </div>
                <div className="text-primary fs-5 fw-bold ms-auto">{`$${item.price}`}</div>
              </div>
              <h6>{item.title}</h6>
              <p>{item.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
