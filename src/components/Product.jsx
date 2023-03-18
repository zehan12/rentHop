import Search from "./Search";
import React, { useState } from "react";
import Sidebar_Loc from "./Sidebar_Loc"
import Card from "./Card";

function Product() {

    const [cityId, setCityId] = useState("");

    const [bikes, setBikes] = useState("")

    console.log("city update on update in product:", cityId)


    return (
        <>
            <section className="sptb-sm bg-white">
                <div className=" container">
                    <>
                        <Search
                            cityId={cityId}
                            setCityId={setCityId}
                            setBikes={setBikes}
                        />
                    </>
                    <>
                        <div className="row">
                            <Sidebar_Loc cityId={cityId} />
                            <Card bikes={bikes} />
                        </div>
                    </>

                </div>
            </section>
        </>
    );
}

export default Product;