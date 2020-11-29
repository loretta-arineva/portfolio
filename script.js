const nav = document.querySelectorAll("#main-nav ul li");

for (let item of nav) {
    const hash = item.lastElementChild.hash;
    const target = document.querySelector(`${hash}`);
    item.addEventListener("click", function () {
        let selected = document.querySelector(".selected");
        selected.className = selected.className.replace(" selected", " hidden");
        selected.className = selected.className.replace(" fadeInLeft", " fadeOutLeft");
        target.className = target.className.replace(" hidden", " selected");
        target.className = target.className.replace(" fadeOutLeft", " fadeInLeft");
    });
}

const bgSquares = document.querySelectorAll(".background-squares li");

for (const item in bgSquares) {

}