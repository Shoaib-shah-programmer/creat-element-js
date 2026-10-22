function run(){
    let container = document.getElementById("container");
    let item =document.getElementById("inp").value;
    let ele =document.createElement("li");
    ele.textContent = item;
    container.appendChild(ele);

}