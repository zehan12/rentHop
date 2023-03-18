import React from "react";
function Header(){
    return ( <>
       
		<div className="header-main header-main-color">
			<div className="top-bar bg-primary">
				<div className="container">		
							<div className="flex">
								<div className="clearfix">
									<ul className="flex social-md">
										<li>
											<a className="social-icon text-muted" href=""><i className="fe fe-facebook"></i></a>
										</li>
										<li>
											<a className="social-icon text-muted" href=""><i className="fe fe-twitter"></i></a>
										</li>
										<li>
											<a className="social-icon text-muted" href=""><i className="fe fe-instagram"></i></a>
										</li>
										<li className="select-country ">
											<select className="form-control select2-flag-search" data-placeholder="Select Country">	
												<option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
												<option value="MM">Myanmar</option>
												<option value="MV">Maldives</option>
												<option value="TH">Thailand</option>	
											</select>
										</li>
									</ul>
								</div>
								<div className="clearfix">
									<ul className="contact">
										<li className="dropdown">
											<a href="" className="text-white" data-bs-toggle="dropdown"><span> En <i className="fe fe-chevron-down fs-13 text-muted"></i></span> </a>
											<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
												<a href="" className="dropdown-item" >
													English
												</a>
												<a className="dropdown-item" href="">
													Arabic
												</a>
												<a className="dropdown-item" href="">
													German
												</a>
												<a href="" className="dropdown-item" >
													Greek
												</a>
												<a href="" className="dropdown-item" >
													Japanese
												</a>
											</div>
										</li>
										<li className="dropdown">
											<a href="" className="text-white" data-bs-toggle="dropdown"><span>Cur <i className="fe fe-chevron-down fs-13 text-muted"></i></span></a>
											<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
												
												<a className="dropdown-item" href="">
													INR
												</a>
                                                <a href="" className="dropdown-item" >
													USD
												</a>
												<a className="dropdown-item" href="">
													EUR
												</a>
												<a href="" className="dropdown-item" >
													GBP
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
				</div>
			</div>

			
			<div className="sticky">
				<div className="horizontal-header clearfix">
					<div className="container">
						<div className="d-flex p-3">	
						<img src="/assets/images/brand/logo.gif" alt="" width="130px" className=""/>
						<nav>
							<ul className="horizontalMenu-list login-icon">
								<li className="dropdown ">
									<a href="" className=" fs-16 font-weight-bold" data-bs-toggle="dropdown"><span> <i className="fe fe-user me-1"></i><i className="fe fe-chevron-down fs-13 "></i></span> </a>
									<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
										<a href="" className="dropdown-item" >
											Bookings
										</a>
										<a className="dropdown-item" href="">
											Profile Information
										</a>
										
										<a href="" className="dropdown-item" >
											Login/SignUp
										</a>
									</div>
								</li>
							</ul>
						</nav>
						<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
			</div>
			

			<div className="sticky-wrapper absolute banners">
				<div className="horizontal-main hozontal-submenu-spacing">
					<div className="container ">
						<div className="d-flex justify-content-between">					
						<div className="desktoplogo">
							<a href="">
								<img src="/assets/images/brand/logo.gif" alt="" className="header-dark"/>
							</a>
						</div>
					
						<nav className="horizontalMenu clearfix ">
							<ul className="horizontalMenu-list account-login">
								<li className="dropdown bordered">
									<div className="fs-12 rider-name">Hello, Rider</div>
									<a href="" className=" fs-16 font-weight-bold" data-bs-toggle="dropdown"><span> Account <i className="fe fe-chevron-down fs-13 "></i></span> </a>
									<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
										<a href="" className="dropdown-item" >
											Bookings
										</a>
										<a className="dropdown-item" href="">
											Profile Information
										</a>
										
										<a href="" className="dropdown-item" >
											Login/SignUp
										</a>
									</div>
								</li>
								<li className="contact-us" >
									<p>Call us at</p>
									<a  href="+91-9818627676">981-862-7676 </a>
								</li>
							</ul>
						</nav>
						
					</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
}

export default Header;