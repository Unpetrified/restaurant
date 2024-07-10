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

class Dish {
    constructor(name, description, img_url) {
        this.name = name;
        this.description = description;
        this.img_url = img_url;
    }
}

function menuPage() {
    const menu_page_heading = createElement("h2", "menu-heading", "Welcome To Fine Dining");

    const menu_page_nav = createElement("ul", "dish-category");
    
    const dish_categories = ["Breakfast", "Lunch", "Dinner", "Pastries", "Grill", "Drinks"];

    for (let i = 0; i < dish_categories.length; i++) {
        const dish_category = createElement("li", "dish-category-list", dish_categories[i]);
        menu_page_nav.append(dish_category);
    }

    const dishes_section = createElement("section", "dishes");

    let egusi = new Dish("egusi", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", "./assets/nut-soup.jpg");
    let oha = new Dish("oha", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", "./assets/nut-soup.jpg");
    let ogbono = new Dish("ogbono", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", "./assets/nut-soup.jpg");
    let nsala = new Dish("nsala", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", "./assets/nut-soup.jpg");

    const dishes = [egusi, oha, ogbono, nsala];

    for (let i = 0; i < dishes.length; i++) {

        let dish = createElement("div", "dish");
        
        let img = document.createElement("img");
        img.setAttribute("src", dishes[i].img_url);
        
        let dish_description_section = createElement("div", "description");
        let dish_name = createElement("h3", "dish-name", dishes[i].name);
        let dish_description = createElement("p", "dish-description", dishes[i].description);
        
        dish_description_section.append(dish_name);
        dish_description_section.append(dish_description);
        
        dish.append(img);
        dish.append(dish_description_section);

        dishes_section.append(dish);
    }
    

    const menu_page = createElement("div", "menu-page");

    menu_page.append(menu_page_nav);
    menu_page.append(dishes_section);

    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(menu_page_heading);
    document.querySelector(".container").append(menu_page);
}

function contactPage() {
    const contact_page_heading = createElement("h2", "contact-heading", "Contact Us");
    const location_paragraph = createElement("p", "address", "We are located at 1 Nice Avenue between The Aso Villa and Hilton Hotels.");
    
    const email_address = createElement("p", "address", "You can send us an email on aurumcuisine@domain.com");
    const phone = createElement("p", "address", "Or call us at +234 7012345678");
   
    const contact_page = createElement("div", "contact-page");

    contact_page.append(contact_page_heading);
    contact_page.append(location_paragraph);
    contact_page.append(email_address);
    contact_page.append(phone);
    
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(contact_page);
}