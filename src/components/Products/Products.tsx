/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import RHeader from "../RHeader/RHeader";
import "./style.scss"

export default function Products() {
  return (
    <>
      <h1 className="lg-title">Products</h1>

      <div className="products">
        <div className={"mb-5"}>
          <RHeader title={<h1 className={"pm-title pm-title-nth-c"}>Minecraft Small</h1>}
                   image={"https://upload.craftions.net/file/8d0csjnA4l/hosting-server-minecraft.png"}
                   imageStyle={{ width: "256px" }} rtl={true} noAnimation={true}>
            Our small minecraft servers cost only <b>1,25 € / month</b>. It has <b>1 GB of RAM</b> and <b>1 GB of Diskspace</b>. Its maximum
            CPU capacity is <b>50 %</b> of one core. In addition you can create <b>one backup</b>.
          </RHeader>
          <RHeader title={<h1 className={"pm-title pm-title-nth-c"}>Minecraft Medium</h1>}
                   image={"https://upload.craftions.net/file/8d0csjnA4l/hosting-server-minecraft.png"}
                   imageStyle={{ width: "256px" }} rtl={false} noAnimation={true}>
            Our medium minecraft servers cost only <b>2,75 € / month</b>. It has <b>2 GB of RAM</b> and <b>4 GB of Diskspace</b>. Its maximum
            CPU capacity is <b>100 %</b> of one core. In addition you can create <b>one database</b> and <b>4 backups</b>.
          </RHeader>
          <RHeader title={<h1 className={"pm-title pm-title-nth-c"}>Minecraft Large</h1>}
                   image={"https://upload.craftions.net/file/8d0csjnA4l/hosting-server-minecraft.png"}
                   imageStyle={{ width: "256px" }} rtl={true} noAnimation={true}>
            Our large minecraft servers cost only <b>5 € / month</b>. It has <b>4 GB of RAM</b> and <b>8 GB of Diskspace</b>. Its maximum
            CPU capacity is <b>150 %</b> of one core. In addition you can create <b>4 database</b> and <b>8 backups</b>.
          </RHeader>
          <RHeader title={<h1 className={"pm-title pm-title-nth-c"}>Minecraft Mega</h1>}
                   image={"https://upload.craftions.net/file/8d0csjnA4l/hosting-server-minecraft.png"}
                   imageStyle={{ width: "256px" }} rtl={false} noAnimation={true}>
            Our mega minecraft servers cost only <b>9,35 € / month</b>. It has <b>8 GB of RAM</b> and <b>16 GB of Diskspace</b>. Its maximum
            CPU capacity is <b>200 %</b> of one core. In addition you can create <b>8 database</b> and <b>20 backups</b>.
          </RHeader>
        </div>
      </div>
    </>
  );
}