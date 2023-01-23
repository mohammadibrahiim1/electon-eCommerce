import React, { useContext } from "react";
// import context from 'react-bootstrap/esm/AccordionContext';
import { ProductContext } from "../Context/Context";

const ProductSlider = () => {
  const allProducts = useContext(ProductContext);
  console.log(allProducts);
  return (
    <div>
      <section className="product-slider-section">
        <h6>product slider</h6>

        <div>
          { allProducts && allProducts.slice(0,3).map((dp) => (
            <>
              <div class="card mb-3" style={{ "max-width": "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={dp.thumbnail}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{dp.title}</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
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
