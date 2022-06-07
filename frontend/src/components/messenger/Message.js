import React from "react";
import "../../App.css";

export const Message = ({ own }) => {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <p className="messageName">Jane Doe:</p>
          <p className="messageText">
            Lorem ipsum dolor sit amet. In debitis voluptatum sit laborum
            doloremque non dolor tempora et illum optio in unde voluptas non
            temporibus excepturi? Non esse facere aut repudiandae animi aut nemo
            labore. Aut delectus quia sit voluptas expedita est ipsam debitis
            qui voluptatem dolores sit reiciendis nihil et vero quia.
          </p>
        </div>
        <div className="messageBottom"></div>
      </div>
    </>
  );
};
