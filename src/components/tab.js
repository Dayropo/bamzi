import React, { useState } from "react"

const Tab = ({ product }) => {
  const [tab, setTab] = useState(0)

  const toggleTab = index => {
    setTab(index)
  }

  return (
    <div className="w-full my-5">
      <nav className="flex space-x-4 pb-1 border-b-2 border-b-gray-200 ">
        <div
          className={
            tab === 0
              ? "text-primary font-semibold border-b-secondary cursor-pointer relative after:absolute after:bg-secondary after:w-full after:h-1 after:-bottom-1.5 after:left-0 "
              : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
          }
          onClick={() => toggleTab(0)}
        >
          Description
        </div>
        <div
          className={
            tab === 1
              ? "text-primary font-semibold border-b-secondary cursor-pointer relative after:absolute after:bg-secondary after:w-full after:h-1 after:-bottom-1.5 after:left-0"
              : "text-gray-400 hover:text-primary font-semibold cursor-pointer"
          }
          onClick={() => toggleTab(1)}
        >
          Reviews
        </div>
      </nav>

      <div className="mt-5">
        <div className={tab === 0 ? "block" : "hidden"}>
          <p className="text-sm text-gray-400 mb-4">
            {product.description.content}
          </p>
          <img
            src={product.description.image}
            alt=""
            className="w-full aspect-auto object-contain"
          />
        </div>
        <div className={tab === 1 ? "block" : "hidden"}>
          {product.reviews.map((review, index) => {
            return (
              <div key={index} className="px-2 py-4">
                <p className="text-sm md:text-base ">{review.content}</p>
                <p className="text-right text-gray-400 border-b border-b-gray-200 text-sm md:text-base">{`by ${review.name}`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tab
