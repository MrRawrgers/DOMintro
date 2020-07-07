const listArray = document.getElementsByTagName("li")
const button1 = document.getElementById("myButton1")
const button2 = document.getElementById("myButton2")
const text = document.getElementById("title")
const hench = document.getElementById("henchMan")
const input = document.getElementById("myInput")
const button3 = document.getElementById("myButton3")
const myDiv = document.getElementById("myDiv");
const square = document.getElementById("mySquare");
const button4 = document.getElementById("myButton4")

button4.addEventListener("click", () => {
    myDiv.style.backgroundColor = "blue";
})

listArray[2].style.color = "red";

for (let i = 0; i < 4; i++) {
    listArray[i].style.color = "red";
}

button1.addEventListener("click", () => {
    listArray[1].style.color = "blue";
    listArray[3].style.color = "blue";
})

button2.addEventListener("click", () => {
    text.textContent = "world";
})

hench.addEventListener("mouseover", () => {
    hench.src = "https://cdn.discordapp.com/attachments/642905072614899785/725699587460956211/coomer-2.png";
})

button3.addEventListener("click", () => {
    console.log(input.value);
    myDiv.style.backgroundColor = input.value;
})

