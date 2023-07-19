import React from 'react'
import './Partners.css'

export default function Partners() {
  return (
    <div className="Partners">
      <div className="partners-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon"
          className="partner-svg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
          alt="visa"
          className="partner-svg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
          alt="walmart"
          className="partner-svg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Coinbase.svg"
          alt="coinbase"
          className="partner-svg"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/03/Hulu_logo_%282014%29.svg"
          alt="dropbox"
          className="partner-svg"
        />
      </div>
    </div>
  );
}
