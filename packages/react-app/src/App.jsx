import "antd/dist/antd.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeSwitch, Canvas } from "./components";
import { Home } from "./views";

const walletLinkProvider = walletLink.makeWeb3Provider(`https://mainnet.infura.io/v3/${INFURA_ID}`, 1);
function App(props) {
  return (
    <div className="App">
      <Canvas />
      <Switch>
        <Route exact path="/">
          {/* <Home signer={userSigner} provider={localProvider} /> */}
        </Route>
      </Switch>
      <ThemeSwitch theme="dark" />
    </div>
  );
}

export default App;
