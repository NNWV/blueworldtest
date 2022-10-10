let toggleFullScreen = async () => {


	if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
      // document.getElementById('gallery-container').classList.add('full-gallery')
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

let landingPage = async () => {
    const landingScrim = document.getElementById("loading-scrim");
    landingScrim.remove();
}

const galleryDoorLeft = document.getElementById('to-gallery-1');
const galleryDoorRight = document.getElementById('to-gallery-2');

let slideDoors = async () => {

  setTimeout(() => {
    galleryDoorLeft.classList.add('slideLeft');
    galleryDoorRight.classList.add('slideRight');
  }, 2000);

}

let collapseSidebar = async () => {

}

window.addEventListener('DOMcontentloaded', landingPage())

slideDoors();
// document.getElementById('gallery').addEventListener('mousedown', toggleFullScreen)