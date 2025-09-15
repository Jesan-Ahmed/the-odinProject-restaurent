import "./styles.css";
import restaurantLogo from "./resources/restaurant-logo.svg";
import {home} from "./home.js";
import { menu } from "./menu.js";

alert("hi");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const content = document.querySelector("#content");

const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const contactsbtn = document.querySelector("contacts");

logo.src = restaurantLogo;
logo.alt = "Logo of the restaurant";

homebtn.addEventListener("click", ()=> home(content));
menubtn.addEventListener("click", ()=> menu(content));

home(content);


