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
    <div className="container mt-5 px-8 lg:px-16">
      <h5 className="font-semibold text-lg mb-4">Related Products</h5>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {related.map(item => (
          <div
            className="flex flex-col border rounded-md shadow p-4"
            key={item._id}
          >
            <div className="mx-auto">
              <img
                className="h-36 aspect-square object-contain block"
                src={item.image}
                style={{ objectFit: "contain" }}
                alt="item"
              />
            </div>

            <div className="card-body mt-4">
              <div className="flex justify-between mb-4">
                <div className="flex bg-primary items-center space-x-1 rounded px-3">
                  <span className="text-white mt-1">{item.rating}</span>
                  <FaStar className="text-secondary" />
                </div>
                <div className="text-primary text-lg font-bold">{`$${item.price}`}</div>
              </div>
              <h6>{item.title}</h6>
              <p className="text-sm font-light">{item.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
