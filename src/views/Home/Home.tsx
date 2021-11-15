/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Why from "../../components/Why/Why";
import Products from "../../components/Products/Products";

export default function Home() {
  // <HomeHeader />
  // <Why />
  return (
    <>
      <HomeHeader />
      <Why />
      <Products />
    </>
  );
}