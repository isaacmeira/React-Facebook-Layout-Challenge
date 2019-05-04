import React, { component } from "react";
import { render } from "react-dom";

class App extends component {
  render() {
    return <h1>teste</h1>;
  }
}
render(<App />, document.getElementById("app"));