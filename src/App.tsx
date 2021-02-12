import React, { useEffect } from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Nav from "./components/Navigator/nav";

import { MainContainer } from "./styled-comps/containers";

import { RouteUnion } from "./components/RouteUnion/route_union";
import { ThemeStore } from "./store/theme_store";
import { observer } from "mobx-react-lite";

export const history = createBrowserHistory();

type Props = {
  ts: ThemeStore;
};
const App = observer(({ ts }: Props) => {
  console.log("this is app");
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ts.handleMediaEvent);
  }, []);

  return (
    <MainContainer>
      <Router history={history}>
        <Nav ts={ts} />
        <RouteUnion ts={ts} />
      </Router>
    </MainContainer>
  );
});

const themeStore = new ThemeStore();
export default () => <App ts={themeStore} />;
