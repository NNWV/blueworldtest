let toggleFullScreen = async () => {
	if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
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

const galleryDoorLeft = document.getElementById('to-gallery-1');
const galleryDoorRight = document.getElementById('to-gallery-2');

let slideDoors = async () => {

  setTimeout(() => {
    galleryDoorLeft.classList.add('slideLeft');
    galleryDoorRight.classList.add('slideRight');
  }, 1000);

}

let slideDoorsOpen = async () => {

  galleryDoorLeft.classList.add('slideOpenLeft');
  galleryDoorRight.classList.add('slideOpenRight');

}

let slideDoorsClose = async () => {

  galleryDoorLeft.classList.remove('slideOpenLeft');
  galleryDoorRight.classList.remove("slideOpenRight");
}

let archiveZoom = async () => {
  let archiveDoor = document.getElementById("to-archive-1");

  archiveDoor.classList.add('doorZoom');  
}

slideDoors();
// document.getElementById('gallery').addEventListener('mousedown', toggleFullScreen)
// document.getElementById('gallery-doors').addEventListener('mouseenter', slideDoorsOpen)
// document.getElementById('gallery-doors').addEventListener('mouseleave', slideDoorsClose)
// document.getElementById('archive-door').addEventListener('mousedown', archiveZoom)