import "antd/dist/antd.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeSwitch, Canvas } from "./components";
import { Home } from "./views";

function App(props) {
  return (
    <div className="App">
      <Canvas />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <ThemeSwitch theme="dark" />
    </div>
  );
}

export default App;
