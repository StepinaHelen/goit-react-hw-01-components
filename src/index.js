import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'modern-normalize/modern-normalize.css';

// компонент рендерим как обычный тег, вызываем как экземпляр и рендерим в рут

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
