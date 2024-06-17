import "regenerator-runtime";
import * as bootstrap from "bootstrap";
import "../styles/main.scss";
import "./views/layouts/layout";
import App from "./views/app";
import swRegister from "./utils/sw-register";

// console.log("Hello Coders!");
const app = new App({
  hamburger: document.querySelector(".navbar-toggler"),
  navMenuMobile: document.querySelector(".navbar-collapse"),
  content: document.querySelector("#main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
