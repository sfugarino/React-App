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
      <div class="row">
        <div class="col-1">
          <div class="text-right">ID:</div>
          <div class="text-right">Address:</div>
        </div>
        <div class="col-4">
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
