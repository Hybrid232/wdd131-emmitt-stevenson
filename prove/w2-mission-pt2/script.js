let selectElem = document.querySelector("select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === "dark") {
        logo.setAttribute("src", "images/byui-logo-black.png");
        selectElem.style.color = "black";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
      logo.setAttribute("src", "images/byui-logo-white.png");
      selectElem.style.color = "black";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    
}