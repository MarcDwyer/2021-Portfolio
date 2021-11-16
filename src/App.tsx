import { useEffect } from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import { Nav } from "./components/Navigator/nav";

import { MainContainer } from "./styled-comps/containers";

import { RouteUnion } from "./components/RouteUnion/route_union";
import { ThemeStore } from "./store/theme_store";
import { observer } from "mobx-react-lite";
import { KonamiStore } from "./store/konami_store";

export const history = createBrowserHistory();

type Props = {
  ts: ThemeStore;
};

const konamiStore = new KonamiStore();

export const App = observer(({ ts }: Props) => {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ts.handleMediaEvent);
  }, []);

  return (
    <MainContainer>
      <Router history={history}>
        <Nav ts={ts} ks={konamiStore} />
        <RouteUnion ts={ts} />
      </Router>
    </MainContainer>
  );
});
