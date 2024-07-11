import './menu.css';
import nutSoupImage from './assets/nut-soup.jpg';
let createElement = require("./createEle");

class Dish {
    constructor(name, description, img_url) {
        this.name = name;
        this.description = description;
        this.img_url = img_url;
    }
}

export default function menuPage() {
    const menu_page_heading = createElement("h2", "menu-heading", "Welcome To Fine Dining");

    const menu_page_nav = createElement("ul", "dish-category");
    
    const dish_categories = ["Breakfast", "Lunch", "Dinner", "Pastries", "Grill", "Drinks"];

    for (let i = 0; i < dish_categories.length; i++) {
        const dish_category = createElement("li", "dish-category-list", dish_categories[i]);
        menu_page_nav.append(dish_category);
    }

    const dishes_section = createElement("section", "dishes");

    let egusi = new Dish("egusi", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", nutSoupImage);
    let oha = new Dish("oha", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", nutSoupImage);
    let ogbono = new Dish("ogbono", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", nutSoupImage);
    let nsala = new Dish("nsala", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, suscipit", nutSoupImage);

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

// module.exports = menuPage;