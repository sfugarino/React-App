import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { getTopParlors } from "../api/parlorApi";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

class List extends React.Component {
  state = {
    parlors: []
  };

  componentDidMount() {
    getTopParlors().then(parlors => this.setState({ parlors: parlors }));
  }

  render() {
    return (
      <Row>
        {this.state.parlors.map(parlor => {
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
                <div class="card-text">
                  <StarRatings
                    rating={parlor.rating}
                    starRatedColor="gold"
                    starDimension="25px"
                    starSpacing="3px"
                  ></StarRatings>
                </div>
                <div class="card-text font-italic text-justify">
                  {parlor.review.text}
                </div>
                <div class="card-text font-weight-bold font-italic text-right">
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
    );
  }
}

export default List;
