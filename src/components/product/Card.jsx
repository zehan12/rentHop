import React, { useState } from "react";

function Card({ bikes }) {
    const [loc, setLoc] = useState("");
    console.log(bikes,"bikes")
    return (
        <>
            <div class="col-xl-9 col-lg-8 col-md-12">
                <div class="card">
                    <div class="item2-gl ">
                        <div class=" item2-gl-nav">
                            <div class="sm-bike-filter ">
                                <label class="selectgroup-item mb-md-0">
                                    <input
                                        type="radio"
                                        name="value"
                                        value="All"
                                        class="selectgroup-input"
                                        checked=""
                                    />
                                    <span class="selectgroup-button d-md-flex ">
                                        All <i class="fa fa-sort ms-2 mt-1"></i>
                                    </span>
                                </label>
                                <label class="selectgroup-item mb-md-0">
                                    <input
                                        type="radio"
                                        name="value"
                                        value="Distance"
                                        class="selectgroup-input"
                                    />
                                    <span class="selectgroup-button">Bikes</span>
                                </label>
                                <label class="selectgroup-item mb-sm-0">
                                    <input
                                        type="radio"
                                        name="value"
                                        value="Latest"
                                        class="selectgroup-input"
                                    />
                                    <span class="selectgroup-button">Scooty</span>
                                </label>
                                <label class="selectgroup-item mb-0">
                                    <input
                                        type="radio"
                                        name="value"
                                        value="Rating"
                                        class="selectgroup-input"
                                    />
                                    <span class="selectgroup-button">Superbikes</span>
                                </label>
                            </div>

                            <div>
                                <h6 class="pt-4">Showing 30 entries</h6>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="row">

                                {bikes &&
                                    bikes.map((bike) => (
                                        <div class="col-lg-12 col-md-12 col-xl-4 ">
                                            <div class="card overflow-hidden box-border1 p-1">
                                                <div class="power-ribbon power-ribbon-top-left text-warning">
                                                    <span class="bg-warning">
                                                        <img
                                                            src="../assets/images/png/light.png"
                                                            class=""
                                                            alt=""
                                                            width="30px"
                                                        />
                                                    </span>
                                                </div>
                                                <div class=" ">
                                                    <div class="">
                                                        <div class="item-card9-imgs">
                                                            <a href="property-details.html"></a>
                                                            <img
                                                                src="/assets/images/products/category/bajaj-avenger-cruise-220.jpeg"
                                                                alt="img"
                                                                class="cover-image pt-4"
                                                            />
                                                        </div>
                                                        <div class="item-tags">
                                                            <div class="bg-success tag-option">Hotseller</div>
                                                            <div class="bg-success tag-option">Cruiser</div>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="item-card9 mt-1">
                                                            <a href="property-details.html" class="text-dark">
                                                                <h4 class="font-weight-semibold2 mt-2 mb-2 text-center">
                                                                    {bike.vehicle_name}{" "}
                                                                </h4>
                                                            </a>
                                                            <div class="mb-1 fs-12">
                                                                <select
                                                                    onChange={(e) => setLoc(e.target.value)}
                                                                    value={loc}
                                                                    className="w-100 px-3 py-1"
                                                                    data-placeholder="Select Location"
                                                                >
                                                                    <option>Choose Your Location </option>
                                                                    {
                                                                        bike.price.map((locations) => (
                                                                            <option value={locations.location_id}>{locations.location_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>

                                                            <div class="d-flex flex-wrap  ">
                                                                <div class="col-sm-4 center-block box-border pt-1 rounded-left-top">
                                                                    <div>
                                                                        <h6 class=" fs-12 book-loc-mul mb-3">
                                                                            Location Timing{" "}
                                                                        </h6>
                                                                        <p class="fs-10 book-theme mb-0">
                                                                            10AM - 8PM
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-4 center-block box-border pt-1">
                                                                    <h6 class=" fs-12 book-loc-mul mb-3">
                                                                        Security Deposit
                                                                    </h6>
                                                                    <p class="fs-10 book-theme">
                                                                        <i class="fa fa-inr fs-12"></i>
                                                                        1500
                                                                    </p>
                                                                </div>
                                                                <div class="col-sm-4 center-block box-border pt-1 rounded-right-top">
                                                                    <h6 class=" fs-12 book-loc-mul mb-3">
                                                                        {" "}
                                                                        Trip
                                                                        <br />
                                                                        Limit{" "}
                                                                    </h6>
                                                                    <p class="fs-10 book-theme mb-0">250 KM/day</p>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between">
                                                                <a class=" p-2 bradius2">
                                                                    {" "}
                                                                    from{" "}
                                                                    <span class="fs-18 ms-1 book-loc-mul font-weight-bold">
                                                                        <i class="fa fa-inr fs-18"></i>
                                                                        {
                                                                            bike.price.map((locations) => {
                                                                                if (locations.location_id == loc) {
                                                                                    return locations.weekend_price + "/ "
                                                                                }
                                                                            })
                                                                        }
                                                                    </span>
                                                                    <span class="fs-10">24 hrs</span>{" "}
                                                                </a>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                    class="btn btn-primary waves-effect waves-light mt-3 margin-left-sm"
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
                                        </div>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;


