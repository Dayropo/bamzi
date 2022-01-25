import React from "react"
import { checkboxCategoryData } from "../utils/data"

const CheckboxCategory = ({ onCategoryChange }) => {
  return (
    <div className="py-4 border-b-2 border-gray-200">
      <h3>Category</h3>
      <div className="flex flex-col mt-2">
        {checkboxCategoryData.map((item, index) => (
          <div key={index} className="text-sm space-x-2 flex items-center">
            <input
              type="checkbox"
              id={item.name}
              onClick={() => onCategoryChange(item.value)}
            />
            <label htmlFor={item.name}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxCategory
