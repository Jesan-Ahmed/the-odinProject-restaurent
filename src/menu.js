import "./menu.css";
import burgerImage from "./resources/burger.jpg";
import pizzaImage from "./resources/pizza.jpg";
import pastaImage from "./resources/pasta.jpg";
import chickeFriesImage from "./resources/chicken-fries.jpg";
import frenchFriesImage from "./resources/french-fries.jpg";

const menu = (content)=>{
    content.innerHTML = "";
    const burger = document.createElement("div");
    const pizza = document.createElement("div");
    const pasta = document.createElement("div");
    const chickenFries = document.createElement("div");
    const frenchFries = document.createElement("div");

    burger.classList.add("food");
    pizza.classList.add("food");
    pasta.classList.add("food");
    chickenFries.classList.add("food");
    frenchFries.classList.add("food");

    content.classList.replace("home","menu");
    content.classList.replace("contacts", "menu");

    content.appendChild(burger);
    content.appendChild(pizza);
    content.appendChild(pasta);
    content.appendChild(chickenFries);
    content.appendChild(frenchFries);

    const burgerH1 = document.createElement("h1");
    const pizzaH1 = document.createElement("h1");
    const pastaH1 = document.createElement("h1");
    const chickenFriesH1 = document.createElement("h1");
    const frenchFriesH1 = document.createElement("h1");

    const burgerIMG = document.createElement("img");
    const pizzaIMG = document.createElement("img");
    const pastaIMG = document.createElement("img");
    const chickenFriesIMG = document.createElement("img");
    const frenchFriesIMG = document.createElement("img");

    const burgerBtn = document.createElement("button");
    const pizzaBtn = document.createElement("button");
    const pastaBtn = document.createElement("button");
    const chickenFriesBtn = document.createElement("button");
    const frenchFriesBtn = document.createElement("button");

    burgerH1.textContent = "Burger";
    pizzaH1.textContent = "Pizza";
    pastaH1.textContent = "Pasta";
    chickenFriesH1.textContent = "Chicken Fries";
    frenchFriesH1.textContent = "French Fries";

    burgerBtn.textContent = "7$";
    pizzaBtn.textContent = "9$";
    pastaBtn.textContent = "11%";
    chickenFriesBtn.textContent = "13$";
    frenchFriesBtn.textContent = "5$";

    burgerIMG.src = burgerImage;
    burgerIMG.alt = "burger";

    pizzaIMG.src = pizzaImage;
    pizzaIMG.alt = "pizza";

    pastaIMG.src = pastaImage;
    pastaIMG.alt = "pasta";

    chickenFriesIMG.src = chickeFriesImage;
    chickenFriesIMG.alt = "chicken fries";

    frenchFriesIMG.src = frenchFriesImage;
    frenchFriesIMG.alt = "french fries";

    burger.appendChild(burgerH1);
    burger.appendChild(burgerIMG);
    burger.appendChild(burgerBtn);

    pizza.appendChild(pizzaH1);
    pizza.appendChild(pizzaIMG);
    pizza.appendChild(pizzaBtn);

    pasta.appendChild(pastaH1);
    pasta.appendChild(pastaIMG);
    pasta.appendChild(pastaBtn);

    chickenFries.appendChild(chickenFriesH1);
    chickenFries.appendChild(chickenFriesIMG);
    chickenFries.appendChild(chickenFriesBtn);

    frenchFries.appendChild(frenchFriesH1);
    frenchFries.appendChild(frenchFriesIMG);
    frenchFries.appendChild(frenchFriesBtn);
    
}
export {menu};