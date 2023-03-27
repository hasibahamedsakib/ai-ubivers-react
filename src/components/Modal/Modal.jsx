import React, { useEffect, useState } from "react";

const Modal = ({ id }) => {
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setModalData(data.data));
  }, [id]);

  const { description, features, pricing, integrations, image_link } =
    modalData;
  console.log(modalData);
  return (
    <div>


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">{description}</h3>
    
    <div className="modal-action">
     
    </div>
  </div>
</div>

      </div>
  );
};

export default Modal;
