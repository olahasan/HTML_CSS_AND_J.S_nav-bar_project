let open = document.getElementById("open");
let close = document.getElementById("close");
let container = document.getElementsByClassName("container")[0];

close.onclick = function () {
    container.classList.add("hide");
    close.classList.add("hide");
    open.classList.remove("hide");
}
open.onclick = function () {
    container.classList.remove("hide");
    close.classList.remove("hide");
    close.style.left = "67px";
    // open.classList.add("hide");
}



