const controlEle = document.querySelector("#theme");
let light = localStorage.getItem("theme") === "true";
controlEle.checked = light;
function processThemeState() {
    if (light) {
        $(document.body).removeClass("dark-theme");
        $(document.body).addClass("light-theme");
    } else {
        $(document.body).removeClass("light-theme");
        $(document.body).addClass("dark-theme");
    }
}
processThemeState();
controlEle.addEventListener("change", e => {
    light = e.target.checked;
    localStorage.setItem("theme", JSON.stringify(e.target.checked));
    processThemeState();
});

M.AutoInit();