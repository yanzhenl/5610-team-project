import React from "react";
import produceArray from "./produce.json";
import ProduceItem from "./produce-item";

const ProduceList = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    produceArray.map(produce => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={produce._id}>
                            <ProduceItem produce={produce} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default ProduceList;
