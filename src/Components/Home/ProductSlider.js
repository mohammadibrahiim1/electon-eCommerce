import React, { useContext } from "react";
// import context from 'react-bootstrap/esm/AccordionContext';
import { ProductContext } from "../Context/Context";

const ProductSlider = () => {
  const allProducts = useContext(ProductContext);
  console.log(allProducts);
  return (
    <div>
      <section className="product-slider-section">
        {/* <h6>product slider</h6> */}

        <div className="product-slider container ps-4 pe-4">
          { allProducts && allProducts.slice(6,9).map((dp) => (
            <>
              <div class="card mb-3" style={{ width: "381px",height:"147px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={dp.thumbnail}
                      class="img-fluid rounded-start mt-4 ms-4"
                      style={{ width:"154px",height:"94px"}}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-3">
                      <h5 class="card-title ms-4">{dp.title}</h5>
                      {/* <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
          </p>*/}
                      <p class="card-text ms-4">
                        <small class="text-muted">
                          {dp.brand}
                        </small>
                      </p> 
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSlider;
