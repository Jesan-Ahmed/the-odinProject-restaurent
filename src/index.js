import "./styles.css"
import backGroundImage from "./resources/background.jpg"
import restaurantLogo from "./resources/restaurant-logo.svg";
import {home} from "./home.js";

alert("hi");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const content = document.querySelector("#content");

const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const contactsbtn = document.querySelector("contacts");

body.style.backgroundImage = `url("${backGroundImage}")`;
logo.src = restaurantLogo;
logo.alt = "Logo of the restaurant";

homebtn.addEventListener("click", ()=> home(content));

home(content);


