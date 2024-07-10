const home_btn = document.querySelector(".home");
const menu_btn = document.querySelector(".menu");
const contact_btn = document.querySelector(".contact");

home_btn.addEventListener("click", switchPage);
menu_btn.addEventListener("click", switchPage);
contact_btn.addEventListener("click", switchPage);

homePage();


function switchPage(e) {
    toggleActive(e.target);
    switch (e.target) {
        case home_btn:
            homePage();
            break;
    
        case menu_btn:
            menuPage();
            break

        default:
            contactPage();
            break;
    }
}

function toggleActive(clicked_btn) {
    switch (clicked_btn) {
        case home_btn:
            home_btn.classList.add("focused");

            menu_btn.classList.remove("focused");
            contact_btn.classList.remove("focused");
            break;
        case menu_btn:
            menu_btn.classList.add("focused");
            
            home_btn.classList.remove("focused");
            contact_btn.classList.remove("focused");
            break
        
        default:
            contact_btn.classList.add("focused");

            home_btn.classList.remove("focused");
            menu_btn.classList.remove("focused");
            break;
    }
}

function createElement(element, className, text="") {
    let ele = document.createElement(element);
    ele.classList.add(className);
    ele.textContent = text;

    return ele
}

function homePage() {
    const home_page_text = createElement("h2", "home-heading", "Experience Nigerian Cuisine At Its Finest");
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(home_page_text);
}

function menuPage() {
    const menu_page_text = createElement("h2", "menu-heading", "Welcome To Fine Dining");
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(menu_page_text);
}

function contactPage() {
    const contact_page_heading = createElement("h2", "contact-heading", "Contact Us");
    const location_paragraph = createElement("p", "address", "We are located at 1 Nice Avenue between The Aso Villa and Hilton Hotels.");
    
    const email_address = createElement("p", "address", "You can send us an email on kingztos@domain.com");
    const phone = createElement("p", "address", "Or call us at +234 7012345678");
   
    const contact_page = createElement("div", "contact-page");

    contact_page.append(contact_page_heading);
    contact_page.append(location_paragraph);
    contact_page.append(email_address);
    contact_page.append(phone);
    
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(contact_page);
}