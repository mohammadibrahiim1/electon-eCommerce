import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/Context';

const PopularProducts = () => {
    const allProducts = useContext(ProductContext);
    console.log(allProducts);

    return (
        <div>
           <section>
         <div>
            <div>
            <h3 className='popular-products-title container ps-4'>Popular Products</h3>
            </div>
         
         </div>

         <div className='popular-products mt-5 container m-auto g-5 '>
            {
                 allProducts && allProducts.slice(0,8).map( (product) => (
                    <>
                    <div className="card mb-4" style={{width: "18rem"}}>
  <img src={product.thumbnail} style={{height:"220px"}}  className="card-img-top rounded p-2" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title.slice(0,20)}</h5>
    <p className="card-text mt-3">${product.price}</p>
    <p className="card-text">{product.rating}</p>
    {/* <Link to="/" className="btn btn-primary">{product.rating}</Link> */}
  </div>
</div>
                    </>
                  ) )
                }
         </div>
           </section>
        </div>
    );
};

export default PopularProducts;