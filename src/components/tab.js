import React from "react"

const Tab = ({ product }) => {
  return (
    <>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active text-primary fw-bold"
            id="nav-desc-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-desc"
            type="button"
            role="tab"
            aria-controls="nav-desc"
            aria-selected="true"
          >
            Description
          </button>
          <button
            class="nav-link text-primary fw-bold"
            id="nav-rev-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-rev"
            type="button"
            role="tab"
            aria-controls="nav-rev"
            aria-selected="false"
          >
            Reviews
          </button>
        </div>
      </nav>
      <div class="tab-content mt-3" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-desc" role="tabpanel">
          {product.description}
        </div>
        <div class="tab-pane fade" id="nav-rev" role="tabpanel">
          {product.reviews}
        </div>
      </div>
    </>
  )
}

export default Tab
