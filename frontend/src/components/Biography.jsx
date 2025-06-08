import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
           Healing Touch Hospital is a state-of-the-art medical institution committed to delivering quality and compassionate healthcare. Founded with the vision of accessible treatment for all, the hospital blends modern technology with expert care. With departments spanning from cardiology to pediatrics, we prioritize patient comfort, safety, and fast recovery.

          </p>
          <p>In 2024, we proudly step into digital transformation</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
           In 2024, we proudly step into digital transformation.
We are working on a MERN STACK PROJECT to build a unified doctor-patient dashboard — making healthcare smarter, faster, and more connected.

At Healing Touch, care meets innovation.
Because every life matters.
Coding is fun, but saving lives is better!
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
