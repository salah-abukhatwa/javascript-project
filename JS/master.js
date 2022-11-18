



// Toggle Spin Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    // Toggle Class Fa-spin For Rotation on Self 
    this.classList.toggle("fa-spin")

     // Toggle Class opean ON  Main  Settings Box 
    document.querySelector(".setting-box").classList.toggle("opean")
};

// Switch colors
const colorsli = document.querySelectorAll(".colors-list li")
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color)
        // Set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
    });
});
// select landing page
let landingPage = document.querySelector(".landing-page");

// get arry of images

let imgsArray = ["01.jpeg", "02.jpg", "03.webp", "04.jpg", "05.webp"];
 

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

landingPage.style.backgroundImage = 'url("imge/'+ imgsArray[randomNumber] +'")';

}, 4000);