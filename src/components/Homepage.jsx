import React from "react";
function Homepage() {
  return (
    <>
      <section>
        <div
          className=" cover-image sptb-2 sptb-tab "
          style={{
            backgroundImage: 'url("/assets/images/banners/banner-bg.jpg")',
          }}
        >
          <div className="header-text">
            <div className="container">
              <div className="text-center text-white banner-quote">
                <a href="">
                  Best Motorcycle on Rent{" "}
                  <span
                    className="typewrite"
                    data-period="2000"
                    data-type='[ "Made Easy" ]'
                  ></span>
                </a>
                <p className="fs-18 text-white-80">Adventure Start Now</p>
              </div>
              <div className="row">
                <div className="col-xl-10 col-lg-12 col-md-12">
                  <div className="item-search-tabs tab-content">
                    <div className="item-search-menu">
                      <ul className="nav">
                        <li className="">
                          <a
                            href="#tab1"
                            className="active"
                            data-bs-toggle="tab"
                          >
                            Daily
                          </a>
                        </li>
                        <li>
                          <a href="#tab2" data-bs-toggle="tab">
                            Monthly
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab1">
                        <div className="search-background bg-transparent">
                          <div className="form row g-0 ">
                            <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-transparent ">
                              <select
                                className="form-control input-lg br-te-md-0 br-be-md-0"
                                data-placeholder="Select Category"
                              >
                                <optgroup label="Categories">
                                  <option>Search Your City</option>
                                  <option value="1">Residential</option>
                                  <option value="3">Hostels</option>
                                  <option value="4">Office Space</option>
                                  <option value="5">Retail Space</option>
                                  <option value="6">School Space</option>
                                  <option value="7">College Space</option>
                                  <option value="8">Hostel Buildings</option>
                                  <option value="9">Hotels</option>
                                  <option value="10">Ware house</option>
                                  <option value="11">Industrail</option>
                                  <option value="12">Land Or Flots</option>
                                  <option value="13">Co-working Space</option>
                                  <option value="14">Bacheolors</option>
                                </optgroup>
                              </select>
                            </div>
                            <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-transparent">
                              <input
                                type="text"
                                className="form-control input-lg br-md-0 border-end-0 "
                                placeholder="Pickup "
                              />
                            </div>
                            <div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-transparent">
                              <input
                                type="text"
                                className="form-control input-lg br-md-0 border-end-0 "
                                placeholder="Drop"
                              />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-lg btn-block btn-primary waves-effect waves-light br-ts-md-0 br-bs-md-0"
                              >
                                Search Here
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-detail flex">
                <div className="flex  icon-bg-img">
                  <span className="material-symbols-outlined">
                    location_city
                  </span>
                  <div>
                    <span>2400+ </span>
                    <br />
                    <span>Travel Experience</span>
                  </div>
                </div>
                <div className="flex icon-bg-img">
                  <span className="material-symbols-outlined">
                    location_city
                  </span>
                  <div>
                    <span>2400+ </span>
                    <br />
                    <span>Travel Experience</span>
                  </div>
                </div>
                <div className="flex icon-bg-img">
                  <span className="material-symbols-outlined">
                    location_city
                  </span>
                  <div>
                    <span>2400+ </span>
                    <br />
                    <span>Travel Experience</span>
                  </div>
                </div>
                <div className="flex icon-bg-img">
                  <span className="material-symbols-outlined">
                    location_city
                  </span>
                  <div>
                    <span>2400+ </span>
                    <br />
                    <span>Travel Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sptb bg-white">
        <div className="container">
          <div className="">
            <img src="/assets/images/png/icons8-traffic.png" width="50px" />
            <div className="spcl-heading text-primary">
              25+ Special Offers
            </div>
            <h2>
              What's <span className="font-weight-semibold2">New</span>{" "}
            </h2>
            <p className="mt-3">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="">
            <div className="item ">
              <img src="/assets/images/brand/coupons.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="sptb">
        <div className="container">
          <div>
            <img src="/assets/images/png/icons8-traffic.png" width="50px" />
            <div className="spcl-heading text-primary">
              15+ Recent Lists
            </div>
            <h2 className="mb-0">
              Our <span className="font-weight-semibold2 ">Fleet</span>{" "}
            </h2>
          </div>
          <div className="items-blog-tab">
            <div className="items-blog-tab-heading">
              <div className="p-3 ">
                <ul className="nav items-blog-tab-menu d-flex flex-nowrap">
                  <li className="">
                    <a
                      href="#tab-1"
                      className="active show"
                      data-bs-toggle="tab"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#tab-2" data-bs-toggle="tab" className="">
                      Bikes
                    </a>
                  </li>
                  <li>
                    <a href="#tab-3" data-bs-toggle="tab" className="">
                      Scooty
                    </a>
                  </li>
                  <li>
                    <a href="#tab-4" data-bs-toggle="tab" className="">
                      Superbikes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="myCarousel1" className="d-flex px-3">
              <div className="card overflow-hidden box-border1 p-1">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <img
                      src="../assets/images/png/light.png"
                      className=""
                      alt=""
                      width="30px"
                    />
                  </span>
                </div>
                <div className=" ">
                  <div className="">
                    <div className="item-card9-imgs">
                      <a href="property-details.html"></a>
                      <img
                        src="/assets/images/products/category/bajaj-avenger-cruise-220.jpeg"
                        alt="img"
                        className="cover-image pt-4"
                      />
                    </div>
                    <div className="item-tags">
                      <div className="bg-success tag-option">Hotseller</div>
                      <div className="bg-success tag-option">Cruiser</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="item-card9 mt-1">
                      <a href="property-details.html" className="text-dark">
                        <h4 className="font-weight-semibold2 mt-2 mb-2 text-center">
                          Bajaj Avenger Cruise 220{" "}
                        </h4>
                      </a>
                      <div className="mb-0">
                        <a className="fs-12 bradius2">
                          <p
                            className="text-center book-loc-mul font-weight-bold mb-1 "
                            style={{ border: "1px solid #6300A3" }}
                          >
                            Akshardham Metro{" "}
                            <i className="fe fe-chevron-down fs-13 "></i>
                          </p>
                        </a>
                      </div>

                      <div className="d-flex flex-wrap  ">
                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                          <div>
                            <h6 className=" fs-12 book-loc-mul mb-3">
                              Location Timing{" "}
                            </h6>
                            <p className="fs-11 book-theme mb-0">
                              10AM - 8PM
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-4 center-block box-border pt-1">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            Security Deposit
                          </h6>
                          <p className="fs-11 book-theme">
                            <i className="fa fa-inr fs-12"></i>
                            1500
                          </p>
                        </div>
                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            {" "}
                            Trip <br />
                            Limit{" "}
                          </h6>
                          <p className="fs-11 book-theme mb-0">
                            250 KM/day
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <a className=" p-2 bradius2">
                          {" "}
                          from{" "}
                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                            <i className="fa fa-inr fs-18"></i>1000/
                          </span>
                          <span className="fs-10">24 hrs</span>{" "}
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#owner"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden box-border1 p-1">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <img
                      src="../assets/images/png/light.png"
                      className=""
                      alt=""
                      width="30px"
                    />
                  </span>
                </div>
                <div className=" ">
                  <div className="">
                    <div className="item-card9-imgs">
                      <a href="property-details.html"></a>
                      <img
                        src="/assets/images/products/category/bajaj-avenger-cruise-220.jpeg"
                        alt="img"
                        className="cover-image pt-4"
                      />
                    </div>
                    <div className="item-tags">
                      <div className="bg-success tag-option">Hotseller</div>
                      <div className="bg-success tag-option">Cruiser</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="item-card9 mt-1">
                      <a href="property-details.html" className="text-dark">
                        <h4 className="font-weight-semibold2 mt-2 mb-2 text-center">
                          Bajaj Avenger Cruise 220{" "}
                        </h4>
                      </a>
                      <div className="mb-0">
                        <a className="fs-12 bradius2">
                          <p
                            className="text-center book-loc-mul font-weight-bold mb-1 "
                            style={{ border: "1px solid #6300A3" }}
                          >
                            Akshardham Metro{" "}
                            <i className="fe fe-chevron-down fs-13 "></i>
                          </p>
                        </a>
                      </div>

                      <div className="d-flex flex-wrap  ">
                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                          <div>
                            <h6 className=" fs-12 book-loc-mul mb-3">
                              Location Timing{" "}
                            </h6>
                            <p className="fs-11 book-theme mb-0">
                              10AM - 8PM
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-4 center-block box-border pt-1">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            Security Deposit
                          </h6>
                          <p className="fs-11 book-theme">
                            <i className="fa fa-inr fs-12"></i>
                            1500
                          </p>
                        </div>
                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            {" "}
                            Trip <br />
                            Limit{" "}
                          </h6>
                          <p className="fs-11 book-theme mb-0">
                            250 KM/day
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <a className=" p-2 bradius2">
                          {" "}
                          from{" "}
                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                            <i className="fa fa-inr fs-18"></i>1000/
                          </span>
                          <span className="fs-10">24 hrs</span>{" "}
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#owner"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden box-border1 p-1">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <img
                      src="../assets/images/png/light.png"
                      className=""
                      alt=""
                      width="30px"
                    />
                  </span>
                </div>
                <div className=" ">
                  <div className="">
                    <div className="item-card9-imgs">
                      <a href="property-details.html"></a>
                      <img
                        src="/assets/images/products/category/bajaj-avenger-cruise-220.jpeg"
                        alt="img"
                        className="cover-image pt-4"
                      />
                    </div>
                    <div className="item-tags">
                      <div className="bg-success tag-option">Hotseller</div>
                      <div className="bg-success tag-option">Cruiser</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="item-card9 mt-1">
                      <a href="property-details.html" className="text-dark">
                        <h4 className="font-weight-semibold2 mt-2 mb-2 text-center">
                          Bajaj Avenger Cruise 220{" "}
                        </h4>
                      </a>
                      <div className="mb-0">
                        <a className="fs-12 bradius2">
                          <p
                            className="text-center book-loc-mul font-weight-bold mb-1 "
                            style={{ border: "1px solid #6300A3" }}
                          >
                            Akshardham Metro{" "}
                            <i className="fe fe-chevron-down fs-13 "></i>
                          </p>
                        </a>
                      </div>

                      <div className="d-flex flex-wrap  ">
                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                          <div>
                            <h6 className=" fs-12 book-loc-mul mb-3">
                              Location Timing{" "}
                            </h6>
                            <p className="fs-11 book-theme mb-0">
                              10AM - 8PM
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-4 center-block box-border pt-1">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            Security Deposit
                          </h6>
                          <p className="fs-11 book-theme">
                            <i className="fa fa-inr fs-12"></i>
                            1500
                          </p>
                        </div>
                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            {" "}
                            Trip <br />
                            Limit{" "}
                          </h6>
                          <p className="fs-11 book-theme mb-0">
                            250 KM/day
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <a className=" p-2 bradius2">
                          {" "}
                          from{" "}
                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                            <i className="fa fa-inr fs-18"></i>1000/
                          </span>
                          <span className="fs-10">24 hrs</span>{" "}
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#owner"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden box-border1 p-1">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <img
                      src="../assets/images/png/light.png"
                      className=""
                      alt=""
                      width="30px"
                    />
                  </span>
                </div>
                <div className=" ">
                  <div className="">
                    <div className="item-card9-imgs">
                      <a href="property-details.html"></a>
                      <img
                        src="/assets/images/products/category/bajaj-avenger-cruise-220.jpeg"
                        alt="img"
                        className="cover-image pt-4"
                      />
                    </div>
                    <div className="item-tags">
                      <div className="bg-success tag-option">Hotseller</div>
                      <div className="bg-success tag-option">Cruiser</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="item-card9 mt-1">
                      <a href="property-details.html" className="text-dark">
                        <h4 className="font-weight-semibold2 mt-2 mb-2 text-center">
                          Bajaj Avenger Cruise 220{" "}
                        </h4>
                      </a>
                      <div className="mb-0">
                        <a className="fs-12 bradius2">
                          <p
                            className="text-center book-loc-mul font-weight-bold mb-1 "
                            style={{ border: "1px solid #6300A3" }}
                          >
                            Akshardham Metro{" "}
                            <i className="fe fe-chevron-down fs-13 "></i>
                          </p>
                        </a>
                      </div>

                      <div className="d-flex flex-wrap  ">
                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                          <div>
                            <h6 className=" fs-12 book-loc-mul mb-3">
                              Location Timing{" "}
                            </h6>
                            <p className="fs-11 book-theme mb-0">
                              10AM - 8PM
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-4 center-block box-border pt-1">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            Security Deposit
                          </h6>
                          <p className="fs-11 book-theme">
                            <i className="fa fa-inr fs-12"></i>
                            1500
                          </p>
                        </div>
                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            {" "}
                            Trip <br />
                            Limit{" "}
                          </h6>
                          <p className="fs-11 book-theme mb-0">
                            250 KM/day
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <a className=" p-2 bradius2">
                          {" "}
                          from{" "}
                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                            <i className="fa fa-inr fs-18"></i>1000/
                          </span>
                          <span className="fs-10">24 hrs</span>{" "}
                        </a>
                        <li />
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#owner"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden box-border1 p-1">
                <div className="power-ribbon power-ribbon-top-left text-warning">
                  <span className="bg-warning">
                    <img
                      src="../assets/images/png/light.png"
                      className=""
                      alt=""
                      width="30px"
                    />
                  </span>
                </div>
                <div className=" ">
                  <div className="">
                    <div className="item-card9-imgs">
                      <a href="property-details.html"></a>
                      <img
                        src="/assets/images/products/category/bajaj-avenger-cruise-220.jpeg"
                        alt="img"
                        className="cover-image pt-4"
                      />
                    </div>
                    <div className="item-tags">
                      <div className="bg-success tag-option">Hotseller</div>
                      <div className="bg-success tag-option">Cruiser</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="item-card9 mt-1">
                      <a href="property-details.html" className="text-dark">
                        <h4 className="font-weight-semibold2 mt-2 mb-2 text-center">
                          Bajaj Avenger Cruise 220{" "}
                        </h4>
                      </a>
                      <div className="mb-0">
                        <a className="fs-12 bradius2">
                          <p
                            className="text-center book-loc-mul font-weight-bold mb-1 "
                            style={{ border: " 1px solid #6300A3" }}
                          >
                            Akshardham Metro{" "}
                            <i className="fe fe-chevron-down fs-13 "></i>
                          </p>
                        </a>
                      </div>

                      <div className="d-flex flex-wrap  ">
                        <div className="col-sm-4 center-block box-border pt-1 rounded-left-top">
                          <div>
                            <h6 className=" fs-12 book-loc-mul mb-3">
                              Location Timing{" "}
                            </h6>
                            <p className="fs-11 book-theme mb-0">
                              10AM - 8PM
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-4 center-block box-border pt-1">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            Security Deposit
                          </h6>
                          <p className="fs-11 book-theme">
                            <i className="fa fa-inr fs-12"></i>
                            1500
                          </p>
                        </div>
                        <div className="col-sm-4 center-block box-border pt-1 rounded-right-top">
                          <h6 className=" fs-12 book-loc-mul mb-3">
                            {" "}
                            Trip <br />
                            Limit{" "}
                          </h6>
                          <p className="fs-11 book-theme mb-0">
                            250 KM/day
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <a className=" p-2 bradius2">
                          {" "}
                          from{" "}
                          <span className="fs-18 ms-1 book-loc-mul font-weight-bold">
                            <i className="fa fa-inr fs-18"></i>1000/
                          </span>
                          <span className="fs-10">24 hrs</span>{" "}
                        </a>
                        <li />
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#owner"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sptb bg-white">
        <div className="container  ">
          <img
            className="icon-img"
            src="/assets/images/photos/icon.jpg"
            width="250px"
          />
          <h3 className="text-center fs-30  margin-bottom">
            Join Our Travel Community
            <br /> Share Your Experience
          </h3>
          <div className="d-flex social-link">
            <a>fb.com/rentnhop</a>
            <a>tw.com/rennthop</a>
            <a>insta.com/rentnhop</a>
          </div>
          <div className="instagram-wrap ">
            <div className="instagram-lite">
              <img
                src="/assets/images/photos/231a24d4-3368-447d-a121-87747cf57b59.jpg"
                width="250px"
              />
              <img
                src="/assets/images/photos/23e878fe-c230-4d0e-82c5-f00185af3343.jpg"
                style={{ marginTop: "20px" }}
              />
            </div>

            <div className="instagram-lite">
              <img
                src="/assets/images/photos/3fc2237e-a36a-4bfa-9980-a6e37fa1fa8f.jpg"
                style={{ marginTop: "50px" }}
              />
              <img
                src="/assets/images/photos/45c284e1-ea8d-49eb-9552-e49985e5db03.jpg"
                style={{ marginTop: "20px" }}
              />
            </div>
            <div className="instagram-lite">
              <img src="/assets/images/photos/62978c7c-2103-4dba-a476-8259febe49d4.jpg" />

              <img
                src="/assets/images/photos/7B8D8E66-6637-4E51-B0AF-59C4BCA3C78D.JPG"
                style={{ marginTop: "20px" }}
              />
            </div>
            <div className="instagram-lite">
              <img
                src="/assets/images/photos/IMG_7982.JPG"
                style={{ marginTop: "50px" }}
              />
              <img
                src="/assets/images/photos/d656b1ba-d49c-4591-a920-c6b8f665a5ee.jpg"
                style={{ marginTop: "20px" }}
              />
            </div>
          </div>
          <div className="instagram-wrap insta-mobile">
            <div className="insta-col-1">
              <img
                src="/assets/images/photos/231a24d4-3368-447d-a121-87747cf57b59.jpg"
                style={{ marginTop: "20px" }}
              />
              <img
                src="/assets/images/photos/23e878fe-c230-4d0e-82c5-f00185af3343.jpg"
                style={{ marginTop: "20px" }}
              />

              <img
                src="/assets/images/photos/3fc2237e-a36a-4bfa-9980-a6e37fa1fa8f.jpg"
                style={{ marginTop: "20px" }}
              />
              <img
                src="/assets/images/photos/45c284e1-ea8d-49eb-9552-e49985e5db03.jpg"
                style={{ marginTop: "20px" }}
              />
            </div>
            <div className="">
              <img
                src="/assets/images/photos/62978c7c-2103-4dba-a476-8259febe49d4.jpg"
                style={{ marginBottom: "20px", marginTop: "50px" }}
              />
              <img
                src="/assets/images/photos/7B8D8E66-6637-4E51-B0AF-59C4BCA3C78D.JPG"
                style={{ marginBottom: "20px" }}
              />
              <img
                src="/assets/images/photos/IMG_7982.JPG"
                style={{ marginBottom: "20px" }}
              />
              <img
                src="/assets/images/photos/d656b1ba-d49c-4591-a920-c6b8f665a5ee.jpg"
                style={{ marginTop: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="sptb ">
			<div class="container">
				<div class="section-title">
					<img src="/assets/images/png/icons8-traffic.png" width="50px" />
					<div class="spcl-heading text-primary">15+ Cities</div>
					<h2>Popular Destinations</h2>
					<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
				</div>
                <div id="myCarousel1" class="d-flex " >
					<div class="item text-center ">
						<div class="relative">
							
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround" />
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Delhi</h5>
								<h6 class="mb-1"><b class="text-primary">240</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Mumbai</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Goa</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Leh</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Manali</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Udaipur</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Jaipur</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Pune</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Gurugram</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Noida</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Bangalore</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Chandigarh</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Mussoorie</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Rishikesh</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2">Dehradun</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>
					<div class="item text-center">
						<div class="relative">
						
							<img src="../assets/images/locations/circle/Delhi.jpg" alt="" class="brround"/>
							<div class="mt-4">
								<h5 class="font-weight-semibold2 mt-0 mb-2 ">Jaislamer</h5>
								<h6 class="mb-0"><b class="text-primary">150</b> Bikes</h6>
							</div>
						</div>
					</div>

					
				</div>
			</div>
		</section>
        <section class="sptb bg-white relative cover-image" >
			<div class="container">
				<div class="">
					<img src="/assets/images/png/icons8-traffic.png" width="50px" />
					<div class="spcl-heading text-primary">Steps of shifto</div>
					<h2>How It <span class="text-primary">Works</span></h2>
					<p class="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
				</div>
				<div class="row">
					<div class="col-lg-7">
						<ul class="work-steps">
							<li>
								<div class="step-number bg-primary-light text-primary">1</div>
								<h5 class="font-weight-semibold2">Resgister account</h5>
								<div>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
							</li>
							<li>
								<div class="step-number bg-secondary-light text-secondary">2</div>
								<h5 class="font-weight-semibold2">login account</h5>
								<div>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
							</li>
							<li>
								<div class="step-number bg-success-light text-success">3</div>
								<h5 class="font-weight-semibold2">Post Property Properties</h5>
								<div>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
							</li>
							<li>
								<div class="step-number bg-info-light text-info">4</div>
								<h5 class="font-weight-semibold2">Give Property to rent</h5>
								<div>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
							</li>
							<li>
								<div class="step-number bg-warning-light text-warning">5</div>
								<h5 class="font-weight-semibold2">Get Earnings</h5>
								<div>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
							</li>
						</ul>

					</div>
					<div class="col-lg-5">
						<div class="mt-0">
							<img src="../assets/images/banners/main.jpg" class="br-7 relative" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section class="sptb ">
			<div class="container">
				<div class="section-title">
					<img src="/assets/images/png/icons8-traffic.png" width="50px" />
					<div class="spcl-heading text-primary">Our Security Features</div>
					<h2>What Makes Us The Preferred Choice ?</h2>
					<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
				</div>
				<div class="row ">
					<div class="col-lg-3 col-md-6 col-sm-6 card-mobile-view">
						<div class="">
							<div class="mb-lg-0 mb-5">
								<div class="service-card">
									<div class="bg-primary-transparent icon-bg icon-service about">
										<i class="fe fe-pocket text-primary"></i>
									</div>
									<div class="servic-data mt-3">
										<h4 class="font-weight-semibold2 mb-2">Renters Trust Us</h4>
										<p class="text-muted mb-0">Nam libero tempore, cum soluta nobis est eligendi cumque facere possimus</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 card-mobile-view">
						<div class="">
							<div class="mb-sm-0 mb-5">
								<div class="service-card">
									<div class="bg-secondary-transparent icon-bg icon-service about">
										<i class="fe fe-thumbs-up text-secondary"></i>
									</div>
									<div class="servic-data mt-3">
										<h4 class="font-weight-semibold2 mb-2">Renters Prefer Us</h4>
										<p class="text-muted mb-0">Nam libero tempore, cum soluta nobis est eligendi cumque facere possimus</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 card-mobile-view">
						<div class="">
							<div class="mb-sm-0 mb-5">
								<div class="service-card">
									<div class="bg-success-transparent icon-bg icon-service about">
										<i class="fe fe-file-text text-success"></i>
									</div>
									<div class="servic-data mt-3">
										<h4 class="font-weight-semibold2 mb-2">Maximum Choices</h4>
										<p class="text-muted mb-0">Nam libero tempore, cum soluta nobis est eligendi cumque facere possimus</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 card-mobile-view">
						<div class="">
							<div class="">
								<div class="service-card">
									<div class="bg-info-transparent icon-bg icon-service about">
										<i class="fe fe-users text-info"></i>
									</div>
									<div class="servic-data mt-3">
										<h4 class="font-weight-semibold2 mb-2">Expert Guidance</h4>
										<p class="text-muted mb-0">Nam libero tempore, cum soluta nobis est eligendi cumque facere possimus</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </section>
        <section class="sptb">
				<div class="container">
					<div class="section-title">
						<img src="/assets/images/png/icons8-traffic.png" width="50px" />
						<div class="spcl-heading text-primary">Latest Blog</div>
						<h2>Article News</h2>
						<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
					</div>
					<div class="row">
						<div id="myCarousel1" class="d-flex">
						<div class="">
							<div class="card overflow-hidden ">
								<div class="item7-card-img">
									<a href="blog-details.html"></a>
									<img src="../assets/images/products/f1.png" alt="img" class=""/>
								</div>
								<div class="card-body p-1">
									<div class="item7-card-desc flex mb-1 fs-11 ">
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-calendar text-muted me-2"></i>Dec-03-2021</a>
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-user text-muted me-2"></i>Nissy Sten</a>
										<div class="ms-auto">
											<a href="javascript:void(0);" class="text-muted me-0"><i class="fe fe-message-circle text-muted me-2"></i>4 Comments</a>
										</div>
									</div>
									<a href="javascript:void(0);" class="text-dark"><h4 class="font-weight-semibold2 mb-2">Apartment For Rent</h4></a>
									<p class="text-muted">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem	</p>
									<a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect waves-light">Read More<i class="fe fe-chevrons-right ms-1"></i></a>
								</div>
							</div>
						</div>
						<div class="">
							<div class="card overflow-hidden ">
								<div class="item7-card-img">
									<a href="blog-details.html"></a>
									<img src="../assets/images/products/j2.png" alt="img" class=""/>
								</div>
								<div class="card-body p-1">
									<div class="item7-card-desc d-flex mb-1 fs-11">
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-calendar text-muted me-2"></i>Nov-28-2021</a>
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-user text-muted me-2"></i>Nissy Sten</a>
										<div class="ms-auto">
											<a href="javascript:void(0);" class="text-muted me-0"><i class="fe fe-message-circle text-muted me-2"></i>2 Comments</a>
										</div>
									</div>
									<a href="javascript:void(0);" class="text-dark"><h4 class="font-weight-semibold2 mb-2">Home  For Rent</h4></a>
									<p class="text-muted">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem</p>
									<a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect waves-light">Read More<i class="fe fe-chevrons-right ms-1"></i></a>
								</div>
							</div>
						</div>
						<div class="">
							<div class="card overflow-hidden ">
								<div class="item7-card-img">
									<a href="blog-details.html"></a>
									<img src="../assets/images/products/b2.png" alt="img" class=""/>
								</div>
								<div class="card-body p-1">
									<div class="item7-card-desc d-flex mb-1 fs-11">
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-calendar text-muted me-2"></i>Nov-19-2021</a>
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-user text-muted me-2"></i>Nissy Sten</a>
										<div class="ms-auto">
											<a href="javascript:void(0);" class="text-muted me-0"><i class="fe fe-message-circle text-muted me-2"></i>8 Comments</a>
										</div>
									</div>
									<a href="javascript:void(0);" class="text-dark"><h4 class="font-weight-semibold2 mb-2">Luxury Home  For Rent</h4></a>
									<p class="text-muted">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem</p>
									<a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect waves-light">Read More<i class="fe fe-chevrons-right ms-1"></i></a>
								</div>
							</div>
						</div>
						
						<div class="">
							<div class="card overflow-hidden ">
								<div class="item7-card-img h-100">
									<a href="blog-details.html"></a>
									<img src="../assets/images/products/v2.png" alt="img" class=""/>
								</div>
								<div class="card-body p-1">
									<div class="item7-card-desc d-flex mb-1 fs-11">
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-calendar text-muted me-2"></i>Dec-10-2021</a>
										<a href="javascript:void(0);" class="text-muted"><i class="fe fe-user text-muted me-2"></i>Nissy Sten</a>
										<div class="ms-auto">
											<a href="javascript:void(0);" class="text-muted me-0"><i class="fe fe-message-circle text-muted me-2"></i>1 Comments</a>
										</div>
									</div>
									<a href="javascript:void(0);" class="text-dark"><h4 class="font-weight-semibold2 mb-2">Deluxe House For Rent</h4></a>
									<p class="text-muted">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem</p>
									<a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect waves-light">Read More<i class="fe fe-chevrons-right ms-1"></i></a>
								</div>
							</div>
						</div>
						
					</div>
					</div>
				</div>
			</section>
            <section class="sptb bg-white cover-image ht-mv" >
			<div class="container">
                <div class="row">
					<div class="col-lg-4">
						<div class="main-shift-img main-shift-img2">
							
							<img src="../assets/images/other/app.jpg" class="br-7 relative" alt=""/>
						</div>
					</div>
					<div class="col-lg-8">
						<div class="mt-4 mt-xl-7">
							<div class="section-title pb-0">
								<img src="/assets/images/png/icons8-traffic.png" width="50px"/> 
								<div class="spcl-heading text-primary">App download</div>
								<h2 class="leading-tight font-weight-semibold2"> Download App</h2>
								<p class="mt-3">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
							</div>
							<div class="text-wrap mt-5">
								<div class="btn-list">
									<a href="javascript:void(0);" class="btn btn-primary btn-lg mb-sm-0 waves-effect waves-light"><i class="fa fa-apple fa-1x me-2"></i> App Store</a>
									<a href="javascript:void(0);" class="btn btn-secondary btn-lg mb-sm-0 waves-effect waves-light"><i class="fa fa-android fa-1x me-2"></i> Google Play</a>
									<a href="javascript:void(0);" class="btn btn-success btn-lg mb-0 waves-effect waves-light"><i class="fa fa-windows fa-1x me-2"></i> Windows</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
}
export default Homepage;
