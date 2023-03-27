import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleCard = ({ cardData }) => {
  const [modalId, setId] = useState(null);
  const { image, features, published_in, name, id } = cardData;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-md">
        <figure>
          <img draggable="false" src={image} alt="Shoes" className="h-56" />
        </figure>
        <div className="card-body px-6">
          <h2 className="card-title font-semibold text-2xl">Features</h2>
          {features.map((f, index) => (
            <li className="list-decimal" key={index}>
              {f}
            </li>
          ))}
          <hr className="border my-5" />
          <div className="card-actions flex items-center justify-between content-end">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{name}</h2>

              <div className="flex gap-3">
                <img className="w-6 " src="calendar.png" alt="" />
                <p className="font-semibold">{published_in}</p>
              </div>
            </div>
            <Modal id={modalId} />
            <label htmlFor="my-modal-5" onClick={() => setId(id)}>
              <img
                className="w-10 cursor-pointer ring-4 ring-offset-2 rounded-full hover:ring-blue-500 transition-all"
                src="right-arrow.png"
                alt="modal open button"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
