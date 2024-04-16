var liste = document.getElementById("liste")
var menu = document.getElementById("menu")

menu.addEventListener("click", () => {
    liste.classList.toggle("hidden")
    liste.classList.toggle("adapt")
})

function doToggle(classname) {
    if (menu.classList.contains(classname)) {
        menu.classList.remove(classname)
    } else (
        menu.classList.add(classname)
    )
}