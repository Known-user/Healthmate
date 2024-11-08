import React from 'react';

const ProductPage = () => {
  return (
    // <div className="bg-[#f1f2f3] text-[#262626] text-[62.5%] font-sans">
    //   <div className="w-[90%] py-5 mx-auto" id="wrap">
    //     <div id="product_layout_3">
    //       <div className="w-[40%] float-left box-border">
    //         <div className=" rounded-sm mx-auto">
    //           <img src="https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-5-1610963789.jpg" alt="Men Shirt" className="max-w-full mx-auto border border-gray-400" />
    //         </div>
    //       </div>
    //       <div className="w-[50%] float-left ml-[10%] min-h-[660px]">
    //         <h1 className="text-[3.6em] font-medium">Men Shirt</h1>
    //         <span className="block text-[2.4em] text-gray-400 line-through">$75</span>
    //         <span className="block text-[2.8em] text-crimson font-bold">$50</span>
    //         <span className="block text-[2em] text-goldenrod mt-1.5">
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star-half"></i>
    //         </span>

    //         <div className="w-full max-w-[300px] h-10 bg-white border border-gray-300 rounded-sm mt-4 relative overflow-hidden">
    //           <select
    //             id="size"
    //             className="w-[268px] h-full p-1.5 text-[2em] bg-transparent border-none appearance-none"
    //           >
    //             <option value="1">Small</option>
    //             <option value="2">Medium</option>
    //             <option value="3">Large</option>
    //             <option value="4">X-Large</option>
    //           </select>
    //           <img
    //             src="https://i.imgur.com/10e9Roz.png"
    //             className="absolute right-0 top-0 h-full w-auto pointer-events-none"
    //             alt="Dropdown Icon"
    //           />
    //         </div>

    //         <div className="flex w-full max-w-[300px] items-center my-5">
    //           <div className="w-[35%] text-[2em]">
    //             <label htmlFor="quantity">QTY:</label>
    //             <input
    //               type="text"
    //               className="w-10 h-10 border border-gray-300 rounded-sm p-2 box-border text-base"
    //             />
    //           </div>
    //           <div className="w-[65%] text-right">
    //             <a
    //               href="#"
    //               className="text-[2em] text-white bg-sky-500 no-underline py-2 px-4 rounded-sm float-right"
    //             >
    //               Add to Cart <i className="fa fa-shopping-cart fa-lg"></i>
    //             </a>
    //           </div>
    //         </div>

    //         <div className="text-gray-400 block w-full min-h-[30px] mb-4">
    //           <span className="block">SKU:12345</span>
    //           <span className="block">QTY:35</span>
    //         </div>

    //         <div className="text-[1.4em] block w-full clear-both">
    //           <p>
    //             Excuse me. I'll call you tonight. Right. Yeah, I think maybe you do. Wait a minute,
    //             wait a minute, Doc, are you telling me that you built a time machine out of a delorean.
    //           </p>
    //           <p>
    //             Um, well it's a delorean, right? Yeah okay. Wow, ah Red, you look great. Everything
    //             looks great. 1:24, I still got time. Oh my god. No, no not again, c'mon, c'mon. Hey.
    //             Libyans. Yeah, well uh, lets keep this brain melting stuff to ourselves, okay? Yeah,
    //             yeah what are you wearing, Dave.
    //           </p>
    //         </div>

    //         <div className="text-[1.4em] leading-[1.2] mb-4 w-[60%]">
    //           <span className="block mt-5 mb-4">Share This:</span>
    //           <span className="block">
    //             <img src="https://i.imgur.com/M8D8rr8.jpg" alt="Share buttons" />
    //           </span>
    //         </div>
    //       </div>

    //       <div className="w-full block mt-5 clear-both">
    //         <ul className="flex w-[50%] h-20 list-none p-0">
    //           <li className="w-[32%] mr-[1%]">
    //             <a
    //               href="#/one"
    //               className="block h-[30px] mt-10 pt-2 text-[1.8em] text-center text-white bg-skyblue rounded-t-sm transition-all hover:mt-[35px] hover:pt-[5px]"
    //             >
    //               More Info
    //             </a>
    //           </li>
    //           <li className="w-[32%] mr-[1%]">
    //             <a
    //               href="#/two"
    //               className="block h-[30px] mt-10 pt-2 text-[1.8em] text-center text-white bg-skyblue rounded-t-sm transition-all hover:mt-[35px] hover:pt-[5px]"
    //             >
    //               Reviews
    //             </a>
    //           </li>
    //           <li className="w-[32%]">
    //             <a
    //               href="#/three"
    //               className="block h-[30px] mt-[30px] pt-2 text-[1.8em] text-center text-skyblue bg-[#545f60] z-[4] rounded-t-sm border border-gray-400"
    //             >
    //               Details
    //             </a>
    //           </li>
    //         </ul>

    //         <div className="w-full min-h-[200px] bg-[#545f60] p-8 mt-[-10px] mb-7 rounded-b-sm border border-gray-400 border-t-0 box-border">
    //           <p className="text-white font-medium text-[1.4em] my-2.5">
    //             Excuse me. I'll call you tonight. Right. Yeah, I think maybe you do. Wait a minute, wait a minute,
    //             Doc, are you telling me that you built a time machine out of a delorean.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="pd-wrap">
  <div className="container mx-auto">
    <div className="heading-section">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
    </div>
    <div className="row flex flex-wrap">
      <div className="col-md-6 w-full md:w-1/2">
        <div id="slider" className="owl-carousel product-slider">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="product-1"/>
          </div>
          <div className="item">
            <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" alt="product-2"/>
          </div>
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" alt="product-3"/>
          </div>
        </div>
        {/* <div id="thumb" className="owl-carousel product-thumb mt-4">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="thumb-1"/>
          </div>
          <div className="item">
            <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" alt="thumb-2"/>
          </div>
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" alt="thumb-3"/>
          </div>
        </div> */}
      </div>
      <div className="col-md-6 w-full md:w-1/2">
        <div className="product-dtl">
          <div className="product-info">
            <div className="product-name text-lg font-semibold mb-2">Variable Product</div>
            <div className="reviews-counter flex items-center mb-4">
              <div className="rate flex">
                <input type="radio" id="star5" name="rate" value="5" defaultChecked />
                <label htmlFor="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">3 stars</label>
              </div>
              <span className="ml-2">3 Reviews</span>
            </div>
            <div className="product-price-discount mb-4">
              <span className="text-xl font-bold">$39.00</span>
              <span className="line-through text-gray-500 ml-2">$29.00</span>
            </div>
          </div>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <div className="row flex flex-wrap mb-4">
            <div className="col-md-6 w-full md:w-1/2 mb-4">
              <label htmlFor="size" className="block text-sm font-medium mb-2">Size</label>
              <select id="size" name="size" className="form-control block w-full border border-gray-300 p-2">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="col-md-6 w-full md:w-1/2">
              <label htmlFor="color" className="block text-sm font-medium mb-2">Color</label>
              <select id="color" name="color" className="form-control block w-full border border-gray-300 p-2">
                <option>Blue</option>
                <option>Green</option>
                <option>Red</option>
              </select>
            </div>
          </div>
          <div className="product-count flex items-center mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
            <form action="#" className="flex items-center ml-4">
              <div className="qtyminus px-2">-</div>
              <input type="text" name="quantity" value="1" className="qty w-12 text-center border border-gray-300 mx-2"/>
              <div className="qtyplus px-2">+</div>
            </form>
            <a href="#" className="round-black-btn bg-black text-white px-4 py-2 ml-4">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
    <div className="product-info-tabs">
      <ul className="nav nav-tabs flex border-b mb-4" id="myTab" role="tablist">
        <li className="nav-item mr-2">
          <a className="nav-link active text-blue-500" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-blue-500" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </div>
        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
          <div className="review-heading text-xl font-bold mb-2">REVIEWS</div>
          <p className="mb-4">There are no reviews yet.</p>
          <form className="review-form">
            <div className="form-group mb-4">
              <label className="block text-sm font-medium mb-2">Your rating</label>
              <div className="reviews-counter flex">
                <div className="rate flex">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label htmlFor="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label htmlFor="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="text">1 star</label>
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <label className="block text-sm font-medium mb-2">Your message</label>
              <textarea className="form-control block w-full border border-gray-300 p-2" rows="10"></textarea>
            </div>
            <div className="row flex flex-wrap mb-4">
              <div className="col-md-6 w-full md:w-1/2">
                <input type="text" className="form-control block w-full border border-gray-300 p-2" placeholder="Name*"/>
              </div>
              <div className="col-md-6 w-full md:w-1/2">
                <input type="text" className="form-control block w-full border border-gray-300 p-2" placeholder="Email Id*"/>
              </div>
            </div>
            <button className="round-black-btn bg-black text-white px-4 py-2">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-gray-500">Get free icon packs for your next project at 
        <a href="http://iiicons.in/" target="_blank" className="text-red-500 font-bold"> www.iiicons.in</a>
      </p>
    </div>
  </div>
</div>

  );
};

export default ProductPage;










