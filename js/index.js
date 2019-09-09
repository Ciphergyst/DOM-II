// Your code goes here
//Lets change the color of the Fun Bus logo on a mouseover event to red
const mousedOverLogo = document.querySelector('.logo-heading');

mousedOverLogo.addEventListener('mouseover', (e) => {
    console.log('mouseover counter'); mousedOverLogo.style.color = 'red';

    // reset timer
    setTime(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// Lets create a Keydown event that affects the body
const bodyEventKey = document.getElementsByTagName("body");

bodyEventKey.addEventListener("keydown", e => {
    bodyEventKey.style.color = 'aqua';

})

// Lets report back window height and width during resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}
// Lets allow quick zoom in or out with mousewheel
let scale = 1;
const entireDoc = document.querySelector('body');

entireDoc.addEventListener('wheel', zoom);
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    entireDoc.style.transform = `scale(${scale})`;
  }

  const dragLogo = document.querySelector('.logo-heading')
  dragLogo.document.addEventListener("drag", function(event) {

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
