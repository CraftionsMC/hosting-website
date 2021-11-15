/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Why from "./components/Why/Why";
import Products from "./components/Products/Products";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/why"} exact component={Why} />
        <Route path={"/products"} exact component={Products} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
