{"esversion:6"}

// Your code goes here
//Lets change the color of the Fun Bus logo on a mouseover event to red
let mousedOverLogo = document.querySelector('.logo-heading');

mousedOverLogo.addEventListener('mouseover', (e) => {
    console.log('mouseover counter'); mousedOverLogo.style.color = 'red';

    // reset timer
    let setTime = (function() {
        event.target.style.color = "white";
    }, 200);
}, false);

let darkMode = document.querySelector('body, .main-navigation');

darkMode.addEventListener('mouseover', (e) => {
    console.log('Dark mode activated'); document.body.style.backgroundColor = '#181a1b';
    let darkModeNav = document.querySelector('.main-navigation');
    darkModeNav.style.backgroundColor = '#181a1b';
    document.querySelector("body > div > header > h2").style.color = 'red';
    document.querySelector("body > div > section:nth-child(2) > div.text-content > h2").style.color = 'red';
    document.querySelector("body > div > section.content-section.inverse-content > div.text-content > h2").style.color = 'red';
    document.querySelector("body > div > section.content-destination > h2").style.color = 'red';
    document.querySelector("body > div > header > p").style.color = 'white';
    document.querySelector("body > div > section:nth-child(2) > div.text-content > p:nth-child(2)").style.color = 'white';
    document.querySelector("body > div > section:nth-child(2) > div.text-content > p:nth-child(3)").style.color = 'white';
    document.querySelector("body > div > section.content-section.inverse-content > div.text-content > p:nth-child(2)").style.color = 'white';
    document.querySelector("body > div > section.content-section.inverse-content > div.text-content > p:nth-child(3)").style.color = 'white';
    document.querySelector("body > div > section.content-destination > p").style.color = 'white';
    document.querySelector("body > div > section.content-pick > div:nth-child(1) > p").style.color = 'white';
    document.querySelector("body > div > section.content-pick > div:nth-child(2) > p").style.color = 'white';
    document.querySelector("body > div > section.content-pick > div:nth-child(3) > p").style.color = 'white';
    document.querySelector("body > div > section.content-pick > div:nth-child(1) > h4").style.color = 'red';
    document.querySelector("body > div > section.content-pick > div:nth-child(2) > h4").style.color = 'red';
    document.querySelector("body > div > section.content-pick > div:nth-child(3) > h4").style.color = 'red';
    document.querySelector("body > header > div > nav > a:nth-child(1)").style.color = 'blue';
    document.querySelector("body > header > div > nav > a:nth-child(2)").style.color = 'blue';
    document.querySelector("body > header > div > nav > a:nth-child(3)").style.color = 'blue';
    document.querySelector("body > header > div > nav > a:nth-child(4)").style.color = 'blue';


});

// lets prevent the navigatyion links from refreshing the page

// let noRefreshLinks = document.querySelectorAll('a')
// noRefreshLinks.addEventListener('clicked', (e) => {
//     e.preventDefault();
// });

// // Lets create a mouseover event that scales the images
const allFunBusImages = document.querySelectorAll('img');

allFunBusImages.forEach((image) => {
    image.addEventListener('mouseover', (event) => {
        image.style.transform = 'scale(1.4)';
        image.style.transition = 'scale 0.5s';
    })
    image.addEventListener('mouseout', (event) => {
        image.style.transform = 'scale(1.0)';
        image.style.transition = 'transform 0.5s';
    })
});

// 
// // Lets report back window height and width during resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}
// // Lets allow quick zoom in or out with mousewheel

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector("body > div > section.content-pick");
el.onwheel = zoom;


  const dragLogo = document.querySelector('.logo-heading')
  dragLogo.addEventListener("drag", function(event) {

  }, false);

  document.addEventListener('dragstart', function(event) {
      dragged = event.target;

      event.target.style.opacity = .5;
  }, false);

  document.addEventListener('dragend', function(event) {
      event.target.style.opacity = "";
  }, false);

  
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  
  document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  
  }, false);
  
  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);
  
  document.addEventListener("drop", function(event) {
    // Lets prevent default action 
    event.preventDefault();
    // move dragged element to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);


  

let noRefreshLinks = document.querySelectorAll('a')
noRefreshLinks.forEach( klick => {
    klick.addEventListener('click', (event) => {
        alert('Navigation has temporarily been disabled');
    })
})


  
