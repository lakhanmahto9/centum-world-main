import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
// Replace 'YOUR_API_KEY' with your actual Google Maps API key
class MapContainer extends Component {
  render() {
    return (
      <div className="">
        <Map
          google={this.props.google}
          zoom={14}
          style={{ width: "100%", height: "100%"}}
          initialCenter={{
            lat: 37.7749,
            lng: -122.4194,
          }}
        />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA6di8EVDPAl72ukc1H8DRkWG2QIHz2joY",
})(MapContainer);
