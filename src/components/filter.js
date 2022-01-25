import React, { useState, useEffect } from "react"
import { FiStar, FiX } from "react-icons/fi"
import Radio from "./radio"
import CheckboxCategory from "./checkboxCategory"
import CheckboxBrand from "./checkboxBrand"

const Filter = ({ showModal, closeModal, handleFilter }) => {
  const [selectedRating, setSelectedRating] = useState(null)
  const [selectedRadio, setSelectedRadio] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])

  const handleToggle = (val, previousState) => {
    const currentIndex = previousState.indexOf(val)
    let newCheckedArray = [...previousState]
    if (currentIndex === -1) {
      if (val === "") {
        newCheckedArray = []
      } else {
        const filtered = newCheckedArray.filter(item => item !== "")
        newCheckedArray = [...filtered]
      }
      newCheckedArray.push(val)
    } else {
      newCheckedArray.splice(currentIndex, 1)
    }
    return newCheckedArray.sort((a, b) => a - b)
  }

  const onRadioChange = value => {
    setSelectedRadio(value)
  }

  const onCategoryChange = value => {
    const newCategoryState = handleToggle(value, selectedCategory)
    setSelectedCategory(newCategoryState)
  }

  const onBrandChange = value => {
    const newBrandState = handleToggle(value, selectedBrand)
    setSelectedBrand(newBrandState)
  }

  useEffect(() => {
    console.log("brand :", selectedBrand)
    console.log("category :", selectedCategory)
    console.log("radio :", selectedRadio)
    console.log("rating :", selectedRating)
  }, [selectedBrand, selectedCategory, selectedRadio, selectedRating])

  return (
    <div
      className={`bg-black bg-opacity-50 absolute inset-0 sm:bg-none sm:col-span-1 sm:relative sm:flex sm:flex-col sm:bg-opacity-0 ${
        showModal ? "flex flex-col z-10" : "hidden"
      }`}
    >
      <span className="hidden sm:block sm:text-sm">Filters</span>
      <div className="bg-white border-none shadow rounded px-4 mt-3 mb-6 flex flex-col">
        <div className="flex items-center justify-between py-4">
          <button
            className="bg-primary px-6 py-2 rounded text-white text-sm"
            onClick={handleFilter}
          >
            Apply Filter
          </button>
          <button
            className="hover:bg-gray-200 rounded-full p-2 sm:hidden"
            onClick={closeModal}
          >
            <FiX />
          </button>
        </div>

        <Radio onRadioChange={onRadioChange} />
        <CheckboxCategory onCategoryChange={onCategoryChange} />
        <CheckboxBrand onBrandChange={onBrandChange} />

        <div className="py-4 space-y-2">
          <h3>Rating</h3>
          <div
            className="flex cursor-pointer"
            onClick={() => setSelectedRating(5)}
          >
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
          </div>
          <div
            className="flex cursor-pointer"
            onClick={() => setSelectedRating(4)}
          >
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-gray-400 w-5" />
          </div>
          <div
            className="flex cursor-pointer"
            onClick={() => setSelectedRating(3)}
          >
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-gray-400 w-5" />
            <FiStar className="text-gray-400 w-5" />
          </div>
          <div
            className="flex cursor-pointer"
            onClick={() => setSelectedRating(2)}
          >
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-gray-400 w-5" />
            <FiStar className="text-gray-400 w-5" />
            <FiStar className="text-gray-400 w-5" />
          </div>
          <div
            className="flex cursor-pointer"
            onClick={() => setSelectedRating(1)}
          >
            <FiStar className="text-secondary w-5" />
            <FiStar className="text-gray-400 w-5" />
            <FiStar className="text-gray-400 w-5" />
            <FiStar className="text-gray-400 w-5" />
            <FiStar className="text-gray-400 w-5" />
          </div>
        </div>

        <button className="bg-primary text-white text-sm py-2 px-6 rounded border-none mb-3">
          CLEAR ALL FILTERS
        </button>
      </div>
    </div>
  )
}

export default Filter
