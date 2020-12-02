import React from 'react';
import './Business.css';

const googleMapsURL = "https://www.google.com/maps/search/?api=1&query=";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.props.business.url} target="_blank">
          <img src={this.props.business.imageSrc} alt={this.props.business.name} />
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <a className="google-link" href={googleMapsURL + this.props.business.name.split(" ").join("+") + "+" + this.props.business.city.split(" ").join("+") + "+" + this.props.business.state.split(" ").join("+")} target="_blank">
              <p>{this.props.business.address}<br />
                {this.props.business.city}<br />
                {`${this.props.business.state} ${this.props.business.zipCode}`}</p>
            </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;