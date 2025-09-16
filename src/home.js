import "./home.css";

const home = (content)=>{
    content.innerHTML = "";
    const heading = document.createElement("h1");
    const para = document.createElement("p");
    heading.textContent = "Taste the Best";
    para.textContent = " Welcome to The Golden Spoon, where every dish tells a story. We believe that great food brings people together, and our menu is a celebration of fresh, seasonal ingredients and timeless culinary traditions. Whether you're here for a special occasion or a simple meal with friends, we invite you to relax, savor the moment, and enjoy a dining experience crafted with passion and care.";

    content.appendChild(heading);
    content.appendChild(para);
    content.classList.add("home");
    if(content.classList.contains("menu")){
        content.classList.replace("menu", "home");
    }
    else if(content.classList.contains("contacts")){
        content.classList.replace("contacts", "home");
    }
    else{
        content.classList.add("home");
    }
}

export {home};