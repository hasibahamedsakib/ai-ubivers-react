import React from "react";

const SingleCard = ({ cardData }) => {
  const { image, features, published_in, name } = cardData;
  console.log(cardData);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-md">
        <figure>
          <img draggable="false" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">Features</h2>
          {features.map((f) => (
            <li className="list-decimal">{f}</li>
          ))}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
<h1>SingleCard</h1>;
