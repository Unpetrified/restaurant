function createElement(element, className, text="") {
    let ele = document.createElement(element);
    ele.classList.add(className);
    ele.textContent = text;

    return ele
}

module.exports = createElement;