// const myDiv = document.getElementById("myDiv");

// myDiv.addEventListener("mouseover", () => {myDiv.style.backgroundColor = "blue";});

// myDiv.addEventListener("click", () => {myDiv.style.borderRadius = "50%";});

// const input = document.getElementById("myInput")
// const button = document.getElementById("myButton")
// const text = document.getElementById("title")



// button.addEventListener("click", () => {
//     text.textContent = input.value;
// });



const listArray = document.getElementsByTagName("li")
const button1 = document.getElementById("myButton1")
const button2 = document.getElementById("myButton2")
const text = document.getElementById("title")
const hench = document.getElementById("henchMan")
const input = document.getElementById("myInput")
const button3 = document.getElementById("myButton3")
const myDiv = document.getElementById("myDiv");

listArray[2].style.color = "red"

for (let i = 0; i < 4; i++) {
    listArray[i].style.color = "red"
}

button1.addEventListener("click", () => {
    listArray[1].style.color = "blue"
    listArray[3].style.color = "blue"
})

button2.addEventListener("click", () => {
    text.textContent = "world"
})

hench.addEventListener("mouseover", () => {
    hench.src = "https://cdn.discordapp.com/attachments/642905072614899785/725699587460956211/coomer-2.png"
})

button3.addEventListener("click", () => {
    console.log(input.value)
    myDiv.style.backgroundColor = input.value;
})
