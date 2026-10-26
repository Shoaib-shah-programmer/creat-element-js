
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    let container = document.getElementById("container");
    let item = document.getElementById("inp");

    let ele = document.createElement("li");
    ele.textContent = item.value;

    let remove = document.createElement("button");
    remove.textContent = "delete";

    remove.onclick = function() {
        container.removeChild(ele);
    };

    ele.appendChild(remove);
    container.appendChild(ele);

    item.value = "";

});
