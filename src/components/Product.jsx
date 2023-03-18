import Search from "./Search";
import React, { useState } from "react";
import Sidebar_Loc from "./Sidebar_Loc"
import Card from "./Card";

function Product() {

    const [cityId, setCityId] = useState("");

    console.log("city update on update in product:", cityId)


    return (
        <>
            <section className="sptb-sm bg-white">
                <div className=" container">
                    <>
                        <Search
                            // setCityId={setCityId}
                        />
                    </>
                    <>
                        <div className="row">
                            {/* <Sidebar_Loc cityId={cityId} /> */}
                            <Card />
                        </div>
                    </>

                </div>
            </section>
        </>
    );
}

export default Product;