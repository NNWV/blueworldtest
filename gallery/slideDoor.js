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

document.getElementById('gallery').addEventListener('click', toggleFullScreen)

// let start = Date.now(); // remember start time

// let timer = setInterval(function() {
//   // how much time passed from the start?
//   let timePassed = Date.now() - start;

//   if (timePassed >= 2000) {
//     clearInterval(timer); // finish the animation after 2 seconds
//     return;
//   }

//   // draw the animation at the moment timePassed
//   draw(timePassed);

// }, 20);

// // as timePassed goes from 0 to 2000
// // left gets values from 0px to 400px
// function draw(timePassed) {
//   // train.style.left = timePassed / 5 + 'px';
// }