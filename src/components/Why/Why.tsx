/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMapMarkerAlt, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export default function Why() {

  return (
    <>
      <div className="cr-why">
        <h1 className={"lg-title"}>Why Craftions Hosting?</h1>
        <div className="features" style={{ textAlign: "center" }}>
          <div className="feature">
            <div className="feature-icon" style={{ backgroundColor: "#0ed729" }}>
              <FontAwesomeIcon icon={faMoneyBill} />
            </div>
            <h1 className="feature-title">CHEAP</h1>
          </div>
          <div className="feature">
            <div className="feature-icon" style={{ backgroundColor: "#d3b310" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h1 className="feature-title">GERMANY</h1>
          </div>
          <div className="feature">
            <div className="feature-icon" style={{ backgroundColor: "#f50505" }}>
              <FontAwesomeIcon icon={faLock} />
            </div>
            <h1 className="feature-title">SECURE</h1>
          </div>
        </div>
        <h1 className={"pm-title"}>Cheap</h1>
        <div className={"has-text-centered"}>
          Craftions Hosting is one of the cheapest Minecraft Hosters all around the world.<br />
          <a href={"https://upload.craftions.net/file/G8EAGKCTuP/price-table-comparable-providers.png"} target={"_blank"} rel={"noreferrer"}>
            <img src={"https://upload.craftions.net/file/G8EAGKCTuP/price-table-comparable-providers.png"}
                 alt={"Prices from comparable providers"} className={"showcase-image"}/>
          </a>
        </div>
      </div>
    </>
  );
}
