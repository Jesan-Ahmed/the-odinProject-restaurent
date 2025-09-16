import "./contacts.css";

const contact = (content)=>{
    content.innerHTML = "";
    const heading = document.createElement("h1");
    const phone = document.createElement("h2");
    const email = document.createElement("h2");
    const location = document.createElement("p");

    heading.textContent ="Contact Us";
    phone.textContent = "Phone: 011111111";
    email.textContent = "Email: email@email.email";
    location.textContent = "Location: some street, somewhere, in some country";

    location.classList.add("location");

    content.classList.replace("home", "contacts");
    content.classList.replace("menu", "contacts");
    
    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(location);
}

export {contact};