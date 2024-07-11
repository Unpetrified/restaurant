let createElement = require("./createEle");

function contactPage() {
    const contact_page_heading = createElement("h2", "contact-heading", "Contact Us");
    const location_paragraph = createElement("p", "address", "We are located at 1 Nice Avenue between The Aso Villa and Hilton Hotels.");
    
    const email_address = createElement("p", "address", "For reservations or Inquiries send us an email on aurumcuisine@domain.com");
    const phone = createElement("p", "address", "Or call us at +234 7012345678");
   
    const contact_page = createElement("div", "contact-page");

    contact_page.append(contact_page_heading);
    contact_page.append(location_paragraph);
    contact_page.append(email_address);
    contact_page.append(phone);
    
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(contact_page);
}

module.exports = contactPage;