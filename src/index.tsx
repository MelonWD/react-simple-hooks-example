// Import react dependencies
import * as React from "react";
import { render } from "react-dom";
// Import app dependencies
import ColoursPage from "./modules/colours/colours.page";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* Include colours page to be rendered */}
      <ColoursPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
