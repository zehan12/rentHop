import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Search(props) {
  console.log(props, "props")
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // cities
  const [cities, setCities] = useState([]);
  // city selectd from options
  const [citySelected, setCitySelected] = useState("");

  useEffect(() => {
    getCities()
  }, [])

  const getCities = async () => {
    const res = await fetch("http://139.59.81.203/api/get-cities",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json()
    setCities(data.city);
  }

  console.log(cities, "data");

  console.log("City selected by user:", citySelected)

  return (
    <>
      <div className="tab-content card mb-4 ">
        <div className="tab-pane active">
          <div className="search-background ">
            <div className="form row g-0 ">
              <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-transparent ">
                <select
                  value={citySelected}
                  onChange={(e) => {
                    console.log(e.target.value,"dlksajlkfkfdsajdallflfalflkjdfljkjlalfkls")
                    setCitySelected(e.target.value);
                    props.setCityId(e.target.value);
                    

                  }}
                  className="form-control input-lg br-te-md-0 br-be-md-0"
                  data-placeholder="Select City"
                >
                  <option>Search Your City</option>

                  {cities?.length !== 0 && cities.map((city) => (
                    <option value={city.city_id}>{city.name}</option>
                  ))
                  }
                </select>
              </div>
              <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-transparent date-block">
                <DatePicker
                  placeholderText="Select Pickup Date"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mmaa"
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-control input-lg br-md-0 border-end-0 "
                />
                <span
                  class="glyphicon glyphicon-calendar relative" style={{ right: "-260px", top: "0px" }}></span>
              </div>
              <div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-transparent date-block2">
                <DatePicker
                  placeholderText="Select Drop Date"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mmaa"
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  onChange={(date) => setEndDate(date)}
                  className="form-control input-lg br-md-0 border-end-0 "
                />
                <span
                  class="glyphicon glyphicon-calendar relative" style={{ right: "-260px", top: "-31px" }}></span>
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
    </>
  );
}

export default Search;
