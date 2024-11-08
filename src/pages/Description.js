import React from 'react'

function Description() {
  return (
    <>
      <div>
      <div className="container">
    <div className="row mb-4">
        <div className="col-md-8">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Company Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact us</a>
                </li>
            </ul>
        </div>
        <div className="col-md-1">
            <ul className="nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-globe"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">English</a>
                        <a className="dropdown-item" href="#">Türkçe</a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="col-md-1">
            <ul className="nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-coins"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Dollar</a>
                        <a className="dropdown-item" href="#">Euro</a>
                        <a className="dropdown-item" href="#">Türk Lirası</a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="col-md-2">
            <ul className="nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"></i>
                        <span>Membership</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Sign In</a>
                        <a className="dropdown-item" href="#">Sign up</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div className="row mb-4">
        <div className="col-md-2">
            <a href="#"><img src="" className="img-thumbnail p-0 border-0" alt="" /></a>
        </div>
        <div className="col-md-6">
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="What search?" />
                <select className="form-control form-control-lg rounded-0">
                    <option>Categories</option>
                    <option>Electronics</option>
                    <option>Decoration</option>
                    <option>Computers</option>
                    <option>Sports</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div>
        <div className="col-md-1">
            <button className="btn btn-outline-secondary btn-block btn-lg" type="button">
                <i className="fas fa-sync-alt"></i>
            </button>
        </div>
        <div className="col-md-1">
            <button className="btn btn-outline-secondary btn-block btn-lg" type="button">
                <i className="fas fa-heart"></i>
            </button>
        </div>
        <div className="col-md-2">
            <div className="dropdown">
                <button className="btn btn-outline-secondary btn-block btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-shopping-bag"></i>
                    <span>Cart</span>
                </button>
                <div className="dropdown-menu dropdown-menu-right p-3" style={{ width: '500px' }}>
                    <table className="table table-sm table-striped table-bordered m-0">
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <img src="https://via.placeholder.com/30x30" className="img-thumbnail p-0" alt="" />
                                </td>
                                <td className="text-left">
                                    <p className="m-0">
                                        <a href="#">
                                            <i className="fas fa-times"></i>
                                        </a>
                                        <span>iPhone 11 Plus</span>
                                    </p>
                                </td>
                                <td className="text-center">1x</td>
                                <td className="text-right">$123.20</td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <img src="https://via.placeholder.com/30x30" className="img-thumbnail p-0" alt="" />
                                </td>
                                <td className="text-left">
                                    <p className="m-0">
                                        <a href="#">
                                            <i className="fas fa-times"></i>
                                        </a>
                                        <span>iPhone 11 Plus</span>
                                    </p>
                                </td>
                                <td className="text-center">1x</td>
                                <td className="text-right">$123.20</td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <img src="https://via.placeholder.com/30x30" className="img-thumbnail p-0" alt="" />
                                </td>
                                <td className="text-left">
                                    <p className="m-0">
                                        <a href="#">
                                            <i className="fas fa-times"></i>
                                        </a>
                                        <span>iPhone 11 Plus</span>
                                    </p>
                                </td>
                                <td className="text-center">1x</td>
                                <td className="text-right">$123.20</td>
                            </tr>
                            <tr>
                                <td className="text-right" colSpan="3">Sub-Total</td>
                                <td className="text-right">$601.00</td>
                            </tr>
                            <tr>
                                <td className="text-right" colSpan="3">Eco Tax (-2.00)</td>
                                <td className="text-right">$4.00</td>
                            </tr>
                            <tr>
                                <td className="text-right" colSpan="3">VAT (20%)</td>
                                <td className="text-right">$120.20</td>
                            </tr>
                            <tr>
                                <td className="text-right" colSpan="3">Total</td>
                                <td className="text-right">$725.20</td>
                            </tr>
                            <tr>
                                <td className="text-right" colSpan="4">
                                    <a className="btn btn-secondary" href="#" role="button">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>View Cart</span>
                                    </a>
                                    <a className="btn btn-primary" href="#" role="button">
                                        <i className="fas fa-share"></i>
                                        <span>Checkout</span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div className="row mb-5">
        <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Electronics, Computers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clothing, Jewelry</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home, Living</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Decoration</a>
                                <a className="dropdown-item" href="#">Furniture</a>
                                <a className="dropdown-item" href="#">Textile</a>
                                <a className="dropdown-item" href="#">Lighting</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sport, Outdoor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Games, Toys</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-12 col-form-label">Color</label>
    <div className="col-sm-12">
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize1" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize1">
                <div className="p-2 mt-1" style={{ backgroundColor: '#ffcc00' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize2" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize2">
                <div className="p-2 mt-1" style={{ backgroundColor: '#66cccc' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize3" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize3">
                <div className="p-2 mt-1" style={{ backgroundColor: '#0fabbc' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize4" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize4">
                <div className="p-2 mt-1" style={{ backgroundColor: '#004445' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize5" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize5">
                <div className="p-2 mt-1" style={{ backgroundColor: '#eb4d55' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize6" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize6">
                <div className="p-2 mt-1" style={{ backgroundColor: '#ff9d76' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize7" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize7">
                <div className="p-2 mt-1" style={{ backgroundColor: '#90303d' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize8" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize8">
                <div className="p-2 mt-1" style={{ backgroundColor: '#015668' }}></div>
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radioSize9" name="radio_size" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="radioSize9">
                <div className="p-2 mt-1" style={{ backgroundColor: '#ffd369' }}></div>
            </label>
        </div>
    </div>
</div>
<div className="input-group input-group-lg mb-4">
    <input type="number" className="form-control text-center" placeholder="Quantity" value="1" min="1" max="5" />
    <div className="input-group-append">
        <span className="input-group-text">Quantity</span>
    </div>
</div>
<div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-secondary">
        <i className="fas fa-cart-plus"></i>
        <span>Add Cart</span>
    </button>
    <button type="button" className="btn btn-secondary">
        <i className="fas fa-shopping-cart"></i>
    </button>
    <button type="button" className="btn btn-secondary">
        <i className="fas fa-heart"></i>
    </button>
    <button type="button" className="btn btn-secondary">
        <i className="fas fa-exchange-alt"></i>
    </button>
</div>
<div className="col-md-12 mt-4">
    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <li className="nav-item">
            <a className="nav-link lead active" role="tab" data-toggle="tab" href="#tabDescription">Description</a>
        </li>
        <li className="nav-item">
            <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabSpecification">Specification</a>
        </li>
        <li className="nav-item">
            <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabReview">Reviews</a>
        </li>
        <li className="nav-item">
            <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabFaq">FAQ's</a>
        </li>
        <li className="nav-item">
            <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabVideo">Video</a>
        </li>
        <li className="nav-item">
            <a className="nav-link lead" role="tab" data-toggle="tab" href="#tabBlog">Blog</a>
        </li>
    </ul>
    <div className="tab-content" id="myTabContent">
        <div className="tab-pane pt-4 active" role="tabpanel" id="tabDescription">
            <p>Morbi et feugiat massa, ut pretium felis. Fusce lobortis quam a turpis iaculis accumsan. In ac odio vitae augue vulputate egestas. Nulla iaculis mi in lectus accumsan pellentesque. Integer neque est, imperdiet eget ex at, suscipit euismod eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed malesuada elementum accumsan. Suspendisse rhoncus accumsan orci, id blandit ante accumsan viverra. Etiam id tortor in arcu suscipit iaculis. Donec efficitur, leo nec pulvinar pulvinar, nibh ligula feugiat augue, euismod condimentum turpis nulla nec ipsum. Praesent id tristique massa, id rhoncus diam. Sed vel odio porttitor, pretium augue nec, placerat neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit sapien. Nullam semper laoreet ligula ut varius. Fusce interdum scelerisque porttitor.</p>
            <p>Nunc mollis velit libero, vel semper lorem bibendum eu. Nam in purus arcu. Quisque et tortor ac nunc ullamcorper interdum vel eget sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ultrices cursus turpis interdum vulputate. Nullam vulputate, nisi ut hendrerit rhoncus, nunc nibh ultrices lorem, at facilisis lorem mauris id ex. Integer nec faucibus odio. Sed nec risus ut nisi tempus viverra. Vivamus hendrerit faucibus lorem. Curabitur vel laoreet est, nec accumsan lacus.</p>
            <p>Maecenas tempus eu ex vitae vulputate. Cras non elit scelerisque, tempus risus eu, porta ipsum. Morbi elementum, lorem a viverra dictum, nibh urna sollicitudin elit, at vestibulum nisi urna at metus. Vivamus id volutpat nibh, finibus vehicula velit. In hac habitasse platea dictumst. Aliquam pharetra lectus massa, et dictum felis molestie et. Nunc sed nibh ac felis consequat consectetur ut sed lorem. Suspendisse tempus tincidunt eros vel pharetra. Mauris pellentesque lacus posuere lacus pellentesque lacinia. Nunc sit amet eros eu ipsum cursus pharetra. Mauris non nunc enim. Vestibulum lectus leo, dictum ut risus sed, semper tristique turpis. Etiam nec libero sed libero tristique condimentum.</p>
            <p>In hac habitasse platea dictumst. Integer ut dignissim diam. Mauris varius eget erat quis sollicitudin. Sed congue nulla lacus. Proin nec hendrerit eros. Proin consequat vehicula quam commodo vestibulum. Etiam nec ligula mattis, laoreet ipsum vel, ultricies nisi. Vestibulum ut dignissim velit. In gravida velit vel vestibulum viverra. Sed convallis at turpis ut pharetra. Nulla auctor laoreet vehicula. Sed in suscipit dui, sit amet varius justo. Aenean vitae ultricies felis, at tincidunt metus.</p>
        </div>
        <div className="tab-pane pt-4" role="tabpanel" id="tabSpecification">
            <ul className="list-unstyled">
                <li>
                    <strong>Color</strong>: Black, Brown
                </li>
                <li>
                    <strong>Size</strong>: Medium
                </li>
                <li>
                    <strong>Weight</strong>: 200g
                </li>
                <li>
                    <strong>Material</strong>: Synthetic
                </li>
                <li>
                    <strong>Warranty</strong>: 2 years
                </li>
            </ul>
        </div>
        <div className="tab-pane pt-4" role="tabpanel" id="tabReview">
            <div className="review-content">
                <div className="review-head">
                    <h6 className="mb-0">Review & Rating</h6>
                    <span className="float-right">4.8 <i className="fas fa-star"></i></span>
                </div>
                <div className="review-body mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, velit! <a href="#">Read More</a></p>
                </div>
            </div>
        </div>
        <div className="tab-pane pt-4" role="tabpanel" id="tabFaq">
            <div className="faq-content">
                <h6 className="mb-4">Frequently Asked Questions</h6>
                <div className="faq-item">
                    <h6>What is your return policy?</h6>
                    <p>Our return policy allows you to return any product within 30 days of purchase.</p>
                </div>
                <div className="faq-item">
                    <h6>Do you offer international shipping?</h6>
                    <p>Yes, we ship worldwide!</p>
                </div>
                <div className="faq-item">
                    <h6>How can I track my order?</h6>
                    <p>You can track your order using the tracking link provided in the confirmation email.</p>
                </div>
            </div>
        </div>
        <div className="tab-pane pt-4" role="tabpanel" id="tabVideo">
            <h6 className="mb-4">Product Video</h6>
            <iframe className="embed-responsive-item" width="100%" height="315" src="https://www.youtube.com/embed/zlYhOW42vBk" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="tab-pane pt-4" role="tabpanel" id="tabBlog">
            <h6 className="mb-4">Related Blog Posts</h6>
            <ul>
                <li><a href="#">How to choose the right color for your product.</a></li>
                <li><a href="#">Top 10 tips for better product photography.</a></li>
                <li><a href="#">Understanding product specifications.</a></li>
            </ul>
        </div>
    </div>
</div>

      </div>
    </>
  )
}

export default Description




