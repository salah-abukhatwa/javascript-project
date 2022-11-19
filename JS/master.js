// Check If there is local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty("--main-color", mainColors);
    // Remove Active Class From All color list item
     document.querySelectorAll(".colors-list li").forEach(element => {
         element.classList.remove("active")
          // add Active Class
    if (element.dataset.color === mainColors) {
        element.classList.add("active")}
     });
   
}


// Toggle Spin Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    // Toggle Class Fa-spin For Rotation on Self 
    this.classList.toggle("fa-spin");

     // Toggle Class opean ON  Main  Settings Box 
    document.querySelector(".setting-box").classList.toggle("opean");
};

// Switch colors
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        // Set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);
        // Remove active class from all items
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        // Add Active Class on
        e.target.classList.add("active")
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