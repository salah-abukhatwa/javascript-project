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
// Switch random-backgrounds
const randomBackeL = document.querySelectorAll(".random-backgrounds span");
randomBackeL.forEach( span => {
    span.addEventListener("click", (e) => {
       
        // Remove active class from all span
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        // Add Active Class on
        e.target.classList.add("active")
        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background-option" , true)
        } else {
            backgroundOption = false
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option" , false)

        }
    });
});
// select landing page
let landingPage = document.querySelector(".landing-page");

// get arry of images

let imgsArray = ["01.jpeg", "02.jpg", "03.webp", "04.jpg", "05.webp"];
 
// Random Background Option 
let backgroundOption = true;

// Vairable To control the Interval
let backgroundInterval;

// Check If there's local Storage Random Background item
let backgroundLocalItem = localStorage.getItem("background-option");
// check if random background local storge is not empty
if (backgroundLocalItem !== null) {
    
    if (backgroundLocalItem === "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
// Remove active class from all spans
       document.querySelectorAll(".random-backgrounds span").forEach(element => {
            element.classList.remove("active")
        });
        // Add Active Class on span
        if (backgroundLocalItem === "true") {
            document.querySelector(".random-backgrounds .yes").classList.add("active")
        } else {
            document.querySelector(".random-backgrounds .no").classList.add("active")

        }
    
}


// Function To Randomize Imgs
 function randomizeImgs() {
    if (backgroundOption === true) {
 backgroundInterval =   setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

landingPage.style.backgroundImage = 'url("imge/'+ imgsArray[randomNumber] +'")';

}, 1000);
    }
}
randomizeImgs();

// Select Skilles Selector
let ourSkilss = document.querySelector(".skills");
window.onscroll = function () {
    // Skills offsit top 
    let skillsOffset = ourSkilss.offsetTop;
   
    // Skills Outer Height
    let skillsOuterHeight = ourSkilss.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;
    
    // Window scrollTop
    let windowScrollTop = this.pageYOffset;
this.console.log(windowScrollTop); 

    if (windowScrollTop + 0.3 > (skillsOffset + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
         // that is from me SALAH
    } else {
         let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = 0;  
           
        });
    }

}