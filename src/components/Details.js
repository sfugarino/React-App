import React, { useState, useEffect } from "react";
import { getParlorDetails } from "../api/parlorApi";

function Details() {
  const [parlor, setParlor] = useState({});

  useEffect(() => {
    getParlorDetails(this.props.match.params.id).then(_parlor =>
      setParlor(_parlor)
    );
  });

  return (
    <div className="row">
      <div className="col-1">
        <div className="text-right">ID:</div>
        <div className="text-right">Address:</div>
      </div>
      <div className="col-4">
        <div>{parlor.id}</div>
        <div>
          <div>{parlor.location.address1}</div>
          <div>
            {parlor.location.city}, {parlor.location.state}{" "}
            {parlor.location.zip_code}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
