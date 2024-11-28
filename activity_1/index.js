const button1 = document.getElementById("button-1");
const displayer = document.getElementById("displayer");

button1.addEventListener("click", () => {
    displayer.textContent = "You clicked a button"
})