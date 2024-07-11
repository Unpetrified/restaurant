import './style.css';
import menuPage from './menupage';
import homePage from './homepage';
import contactPage from './contactpage';
import logo from './assets/Aurum Cuisine.png';

document.querySelector("#logo").setAttribute("src", logo);

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