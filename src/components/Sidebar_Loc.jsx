import React, { useEffect, useState } from "react";
import Popup from "./Popup";

function Sidebar_Loc({ cityId }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  console.log(cityId, "cityId in loc");

  const [locations, setLocations] = useState(null);

  const getLocation = async () => {
    const res = await fetch("http://139.59.81.203/api/get-locations",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city_id: "6104" })
      }
    );
    const data = await res.json()
    console.log(data, "loction data")
    setLocations(data.locations);
  }


  useEffect(() => {
    getLocation();
  }, [])


  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-12">
        <div className="card">
          <div className="card-header flex">
            <h3 className="card-title">Locations</h3>
            <div className=" filter-icon">
              <img
                src="/assets/images/png/icons8-adjust-50.png"
                width="32px" onClick={() => setButtonPopup(true)}
              />
              <>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <div className=" card px-3">
                    <div className="filter-product-checkboxs pt-9">

                      {
                        locations && locations.map((location) => (
                          <label className="custom-control form-checkbox mb-1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              name="checkbox1"

                            />
                            <span className="custom-control-label">
                              <span className="text-dark">
                                {" "}
                                {location.location_name}
                                <span className="label label-secondary float-end">
                                  14
                                </span>
                              </span>
                            </span>
                          </label>))
                      }
                    </div>

                    <div className="panel panel-default mb-0 border-top border-bottom p-0">
                      <div className="panel-heading1">
                        <h4 className="panel-title1">
                          <a
                            className="accordion-toggle collapsed"
                            data-bs-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapseone"
                            aria-expanded="false"
                          >
                            Filter
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseone"
                        className="panel-collapse collapse active"
                        role="tabpanel"
                        aria-expanded="false"
                      >
                        <div className="panel-body bg-white ">
                          <div className="">
                            <h6>
                              <label
                                for="price"
                                className="card-title fs-14 text-default  font-weight-semibold2"
                              >
                                Price Range{" "}
                              </label>
                              <input type="text" id="price" />
                            </h6>
                            <div id="mySlider"></div>
                          </div>
                          <div className="">
                            <h3 className="card-title fs-16 font-weight-semibold2 mb-3">
                              Availability
                            </h3>
                            <div className="filter-product-checkboxs flex flex-wrap">
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option1"
                                />
                                <span className="custom-control-label">
                                  Sports
                                </span>
                              </label>
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option2"
                                />
                                <span className="custom-control-label">
                                  Cruise
                                </span>
                              </label>
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option2"
                                />
                                <span className="custom-control-label">
                                  Commute
                                </span>
                              </label>
                              <label className="custom-control form-checkbox mb-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name="check1"
                                  value="option2"
                                />
                                <span className="custom-control-label">
                                  SuperBike
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary btn-block waves-effect waves-light"
                      >
                        Apply Filter
                      </a>
                    </div>
                  </div>
                </Popup>
              </>
            </div>
          </div>
          <div className="sm-display">
            <div className="card-body">
              <div className="" id="container">
                <div className="filter-product-checkboxs">



                  {
                    locations && locations.map((location) => (
                      <label className="custom-control form-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="checkbox1"
                          value="option1"
                        />
                        <span className="custom-control-label">
                          <span className="text-dark">
                            {" "}
                            {location.location_name}
                            <span className="label label-secondary float-end">
                              14
                            </span>
                          </span>
                        </span>
                      </label>))
                  }

                </div>
              </div>
            </div>
            <div className="">
              <div className="panel panel-default mb-0 border-top border-bottom p-0">
                <div className="panel-heading1">
                  <h4 className="panel-title1">
                    <a
                      className="accordion-toggle collapsed"
                      data-bs-toggle="collapse"
                      data-parent="#accordion2"
                      href="#collapseone"
                      aria-expanded="false"
                    >
                      Filter
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseone"
                  className="panel-collapse collapse active"
                  role="tabpanel"
                  aria-expanded="false"
                >
                  <div className="panel-body bg-white p-5">
                    <div className="">
                      <h6>
                        <label
                          for="price"
                          className="card-title fs-14 text-default mb-2 font-weight-semibold2"
                        >
                          Price Range{" "}
                        </label>
                        <input type="text" id="price" />
                      </h6>
                      <div id="mySlider"></div>
                    </div>
                    <div className="mt-6">
                      <h3 className="card-title fs-16 font-weight-semibold2 mb-3">
                        Availability
                      </h3>
                      <div className="filter-product-checkboxs">
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option1"
                          />
                          <span className="custom-control-label">Sports</span>
                        </label>
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option2"
                          />
                          <span className="custom-control-label">Cruise</span>
                        </label>
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option2"
                          />
                          <span className="custom-control-label">Commute</span>
                        </label>
                        <label className="custom-control form-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="check1"
                            value="option2"
                          />
                          <span className="custom-control-label">
                            SuperBike
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a
                href="javascript:void(0);"
                className="btn btn-primary btn-block waves-effect waves-light"
              >
                Apply Filter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar_Loc;
