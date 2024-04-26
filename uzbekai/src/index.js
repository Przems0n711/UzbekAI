import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./contexts/LanguageContext/index.js";
import pl from "./resources/pl.json";
import en from "./resources/en.json";
import uz from "./resources/uz.json"
import ru from "./resources/ru.json"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider
      dictionary={{
        en,
        pl,
        ru,
        uz,
      }}
      defaultLanguage={"en"}
    >
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
