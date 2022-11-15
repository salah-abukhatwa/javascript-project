// select landing page
let landingPage = document.querySelector(".landing-page");

// get arry of images

let imgsArray = ["01.jpeg", "02.jpg", "03.webp", "04.jpg", "05.webp"];
 

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

landingPage.style.backgroundImage = 'url("imge/'+ imgsArray[randomNumber] +'")';

}, 4000);