import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Container } from "./components/styles/app-container.style";
import App from "./App";
import { ShowProvider } from "./components/hooks/use-show-search";

ReactDOM.render(
  <React.StrictMode>
    <ShowProvider>
      <Container>
        <App />
      </Container>
    </ShowProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
