export function homePage() {
    const home_page_text = createElement("h2", "home-heading", "Experience Nigerian Cuisine At Its Finest");
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(home_page_text);
}