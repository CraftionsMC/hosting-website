/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./style.scss";

export default function HomeHeader() {
  return (
    <>
      <div className="cr-header">
        <div className="cr-header-container">
          <h4 className="header-comp-name">Craftions</h4>
          <h1 className="header-prod-name">Hosting</h1>
          <div className="cr-buttons">
            <a className="header-button" href={"https://dash.hosting.craftions.net"} target={"_blank"} rel={"noreferrer"}>Start now</a>
          </div>
        </div>
      </div>
    </>
  );
}