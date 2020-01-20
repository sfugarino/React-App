import React from "react";
import { getParlorDetails } from "../api/parlorApi";

class Details extends React.Component {
  state = {
    parlor: {
      id: "",
      location: {}
    }
  };

  componentDidMount() {
    getParlorDetails(this.props.match.params.id).then(parlor =>
      this.setState({ parlor: parlor })
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <div className="text-right">ID:</div>
          <div className="text-right">Address:</div>
        </div>
        <div className="col-4">
          <div>{this.state.parlor.id}</div>
          <div>
            <div>{this.state.parlor.location.address1}</div>
            <div>
              {this.state.parlor.location.city},{" "}
              {this.state.parlor.location.state}{" "}
              {this.state.parlor.location.zip_code}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
