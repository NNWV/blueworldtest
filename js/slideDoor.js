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

    let imgs = document.images,
    len = imgs.length,
    counter = 0;

    [].forEach.call(imgs, function(img) { 
      if(img.complete)
        incrementCounter();
      else
        img.addEventListener('load', incrementCounter, false);
    });
    function incrementCounter(){
      counter++; 
      if(counter === len) {
        let landingScrim = document.getElementById("loading-scrim");
        landingScrim.remove();
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

let zipperDoor = async () => {

 document.getElementById('to-archive-1').setAttribute('src', "images/archive-door-open.png")

}



landingPage()

slideDoors();

document.getElementById('to-archive-1').addEventListener('mouseenter', zipperDoor)

// document.getElementById('gallery').addEventListener('mousedown', toggleFullScreen)