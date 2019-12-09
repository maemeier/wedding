import React from "react";
import bride from "../images/hotel2.jpg";
import bride1 from "../images/hotel3.jpg";
import Title from "./Title";
import PackageServices from "./PackageServices";

const ListPackage = () => {
  return (
    <div>
      <PackageServices />
      <div className="packages-center">
        <div>
          <img src={bride1} alt="bride" className="bride" />
        </div>
        <div className="packagesGap">
          <h3 className="packages-title">
            Symbolic elopement basic package for the couple{" "}
          </h3>
          <p className="packageDescription">
            This beautiful and elegant white bridal bouquet has 25 stems of
            roses, gerberas, carnations, fillers, whips of lily grass and
            ruscus. The bridal bouquet is 18"" long. The stems are wrapped with
            white ribbon. Your wedding flowers and wedding roses are shipped
            absolutely fresh, direct from the greenhouses to you via FedEx.This
            beautiful and elegant white bridal bouquet has 25 stems of roses,
            gerberas, carnations, fillers, whips of lily grass and ruscus. The
            bridal bouquet is 18"" long. The stems are wrapped with white
            ribbon. Your wedding flowers and wedding roses are shipped
            absolutely fresh, direct from the greenhouses to you via FedEx.s
          </p>
          <ul>
            <li>Signature creamy wedding cake</li>
            <li>bridal bouquet</li>
            <li>wedding planning and organization</li>
            <li>Elegant Wedding Invitations</li>
            <li>possible for up to 10 guests</li>
            <li>Flowers for the dinner table(basic decor)</li>
          </ul>
        </div>
      </div>

      <div className="packages-center">
        <div>
          <h3 className="packages-title">
            Signature full package for the couple{" "}
          </h3>
          <p className="packageDescription">
            This beautiful and elegant white bridal bouquet has 25 stems of
            roses, gerberas, carnations, fillers, whips of lily grass and
            ruscus. The bridal bouquet is 18"" long. The stems are wrapped with
            white ribbon. Your wedding flowers and wedding roses are shipped
            absolutely fresh, direct from the greenhouses to you via FedEx.This
            beautiful and elegant white bridal bouquet has 25 stems of roses,
            gerberas, carnations, fillers, whips of lily grass and ruscus. The
            bridal bouquet is 18"" long. The stems are wrapped with white
            ribbon. Your wedding flowers and wedding roses are shipped
            absolutely fresh, direct from the greenhouses to you via FedEx.s
          </p>
          <ul>
            <li>Symbolic wedding ceremony on the sandy beach</li>
            <li>Bridal hair styling, trial and wedding day</li>
            <li>Photographer up to 3 hours, online gallery</li>
            <li>Flowers for the dinner table(exclusive decor</li>
            <li>Wedding planning, organization and attending </li>
          </ul>
        </div>
        <div>
          <img src={bride} alt="bride" className="bride" />
        </div>
      </div>
    </div>
  );
};

export default ListPackage;
