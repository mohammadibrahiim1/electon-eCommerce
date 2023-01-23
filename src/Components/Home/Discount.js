import React from 'react';


{/* <a href="https://ibb.co/cFy8r1p"><img src="https://i.ibb.co/581jR6z/pexels-nao-triponez-129208-1-1.png" alt="pexels-nao-triponez-129208-1-1" border="0"></a> */}

const Discount = () => {
    return (
        <div>
            <section className='discount-section container mt-5 pt-5'>


                <div>
                    <img src="https://i.ibb.co/581jR6z/pexels-nao-triponez-129208-1-1.png" style={{height:"400px"}} alt="" />
                </div>
                <div className='discount-info'>
                    <h3 className='discount-title'>Sale up to 50% off</h3>
                    <p className='mt-3'>
                        <small >12 inch hd display</small>
                    </p>
                    <button className='btn btn-warning ps-3 pe-3 mt-3 '>shop now</button>
                </div>
            </section>
        </div>
    );
};

export default Discount;