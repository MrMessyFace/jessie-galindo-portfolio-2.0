import React from "react";

const Freelancer = () => {
  return (
    <div id="freelancing" className="freelancing-section">
      <h2>Freelancing</h2>
      <div className="freelancing-row">
        <div className="freelancing-item-wide">
          <div className="wide-content">
            <p>
              I can make you a website! I typically prefer to make websites from
              scratch and that takes time and care. I am here to make sure your
              imagination goes from your brain straight to the internet. I offer
              a variety of hosting packages at low prices!
            </p>
          </div>
          <div className="wide-price">
            <h3>Rate: $30/hr with $100 non-refundable consultation.</h3>
          </div>
        </div>
      </div>
      <div className="freelancing-row">
        <div className="freelancing-item">
          <div className="free-content-one">
            <p>
              I host both the content and the domain name. Continuous
              maintenance and upkeep included. Adding additional features counts
              as billable hours.
            </p>
          </div>
          <div className="price">
            <h3>$12/mo.</h3>
          </div>
        </div>
        <div className="freelancing-item">
          <div className="free-content-two">
            <p>
              I host the content but not the domain name. Continuous maintenance
              and upkeep included for content only. Adding additional features
              counts as billable hours.
            </p>
          </div>
          <div className="price">
            <h3>$7/mo.</h3>
          </div>
        </div>
        <div className="freelancing-item">
          <div className="free-content-three">
            <p>
              I can teach you how to host your own content and domain name.
              Maintenance and upkeep is not included.
            </p>
          </div>
          <div className="price">
            <h3>$30/hr.</h3>
          </div>
        </div>
      </div>
      <div className="freelancing-row">
        <div className="freelancing-item-tail">
          <p>
            Prices per month are subject to change based on hosting services'
            prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
