function greeting(){
    const button = document.getElementById("aButton");
    button.innerText = button.innerText === "ON" ? "OFF" : "ON";

    const newP = document.createElement("p");
    newP.innerText = "James is a weapon";
    
    newP.innerText = new Date();
    document.getElementById("dates").appendChild(newP);
}
function reset(){
     const button = document.getElementById("aButton");
     button.innerText = "OFF";
}
