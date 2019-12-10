import React from "react";
import cake from "../images/cake.jpg";

const ShowCase = () => {
  return (
    <div className="showCase">
      <div className="showCaseImg"></div>
      <div className="showCaseImg">
        <img src={cake} alt="bride" className="showCaseImg" />
      </div>
      <div className="showCaseBox">
        <p className="showCaseText">
          This beautiful and elegant white bridal bouquet has 25 stems of roses,
          gerberas, carnations, fillers, whips of lily grass and ruscus. The
          bridal bouquet is 18"" long. The stems are wrapped with white ribbon.
          Your wedding flowers and wedding roses are shipped absolutely fresh,
          direct from the greenhouses to you via FedEx.This beautiful and
          elegant white bridal bouquet has 25 stems of roses,{" "}
        </p>
      </div>
    </div>
  );
};

export default ShowCase;
