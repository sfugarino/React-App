import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { getTopParlors } from "../api/parlorApi";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import logo from "../logo.svg";

function List() {
  const [parlors, setParlors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopParlors().then(_parlors => {
      setParlors(_parlors);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Row>
          <div className="loader">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Row>
      ) : (
        <Row>
          {parlors.map(parlor => {
            return (
              <Card style={{ width: "18rem" }} key={parlor.id}>
                <Card.Header className="bg-primary text-white">
                  {parlor.name}
                </Card.Header>
                <Card.Body>
                  <div>
                    <div>{parlor.location.address1}</div>
                    <div>
                      {`${parlor.location.city}, ${parlor.location.state} ${parlor.location.zip_code}`}
                    </div>
                  </div>
                  <div className="card-text">
                    <StarRatings
                      rating={parlor.rating}
                      starRatedColor="gold"
                      starDimension="25px"
                      starSpacing="3px"
                    ></StarRatings>
                  </div>
                  <div className="card-text font-italic text-justify">
                    {parlor.review.text}
                  </div>
                  <div className="card-text font-weight-bold font-italic text-right">
                    {parlor.review.user.name}
                  </div>
                  <Link to={"/details/" + parlor.id} className="card-link">
                    Details
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      )}
    </>
  );
}

export default List;
