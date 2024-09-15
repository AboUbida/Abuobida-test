import React from "react";

export default function ProductCard({ product, fullScreen = false }) {
  let { id, title, price, image } = product;

  return (
    // <!--begin::Product-->
    <div
      className={`${
        fullScreen ? "flex-column-fluid" : "col-md-6 col-xl-4 mb-5"
      }`}
      id="product_card"
    >
      <div className="card-xl-stretch me-md-6 shadow-sm card-rounded">
        {/* <!--begin::Image--> */}
        {!fullScreen && (
          <a
            className="d-block overlay mb-4"
            data-fslightbox="lightbox-hot-sales"
            href={`/products/${id}`}
          >
            <div
              className={`overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded ${
                fullScreen ? "min-h-400px" : "min-h-200px"
              }`}
              style={{
                backgroundImage: `url(${
                  import.meta.env.PUBLIC_SERVER_URL
                }${image})`,
              }}
            ></div>
            <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
              <i className="bi bi-eye-fill fs-2x text-white"></i>
            </div>
          </a>
        )}
        {fullScreen && (
          <div
            className={`overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded ${
              fullScreen ? "min-h-400px" : "min-h-200px"
            }`}
            style={{
              backgroundImage: `url(${
                import.meta.env.PUBLIC_SERVER_URL
              }${image})`,
            }}
          ></div>
        )}
        {/* <!--end::Image--> */}
        {/* <!--begin::Body--> */}
        <div className="m-0 p-5">
          {/* <!--begin::Title--> */}
          <a
            href={`/products/${id}`}
            className="fs-4 text-gray-700 fw-bold text-hover-primary lh-base"
          >
            {title}
          </a>
          {/* <!--end::Title--> */}
          {/* <!--begin::CTA--> */}
          <div className="d-flex align-items-center justify-content-between mt-5">
            {/* <!--begin::Price--> */}
            <div className="text-gray-700 fw-lighter fs-1 fw-200">${price}</div>
            {/* <!--end::Price--> */}
            {/* <!--begin::Actions--> */}
            <div className="d-flex align-items-center gap-2 gap-lg-3">
              {/* <!--begin::Add to cart button--> */}
              <button
                type="button"
                aria-label="add to cart"
                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary"
              >
                <i
                  data-id={id}
                  className="bi bi-bag fs-2 text-gray-700 add_btn"
                ></i>
              </button>
              {/* <!--end::Add to cart button--> */}
            </div>
            {/* <!--end::Actions--> */}
          </div>
          {/* <!--end::CTA--> */}
        </div>
        {/* <!--end::Body--> */}
      </div>
    </div>
    // <!--end::Product-->
  );
}
