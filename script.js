const home_btn = document.querySelector(".home");
const reservation_btn = document.querySelector(".reservation");
const contact_btn = document.querySelector(".contact");

home_btn.addEventListener("click", switchPage);
reservation_btn.addEventListener("click", switchPage);
contact_btn.addEventListener("click", switchPage);

homePage();


function switchPage(e) {
    toggleActive(e.target);
    switch (e.target) {
        case home_btn:
            homePage();
            break;
    
        case reservation_btn:
            reservationPage();
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

            reservation_btn.classList.remove("focused");
            contact_btn.classList.remove("focused");
            break;
        case reservation_btn:
            reservation_btn.classList.add("focused");
            
            home_btn.classList.remove("focused");
            contact_btn.classList.remove("focused");
            break
        
        default:
            contact_btn.classList.add("focused");

            home_btn.classList.remove("focused");
            reservation_btn.classList.remove("focused");
            break;
    }
}

function homePage() {
    const heading = document.createElement("h1");
    heading.textContent = "This is the home page";
    heading.style.color = "white";
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(heading);
}

function reservationPage() {
    const heading = document.createElement("h1");
    heading.textContent = "This is the reservation page";
    heading.style.color = "white";
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(heading);
}

function contactPage() {
    const heading = document.createElement("h1");
    heading.textContent = "This is the contact page";
    heading.style.color = "white";
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(heading);
}