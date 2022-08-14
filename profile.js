
/* Pixal Art slide show*/
function mark( el ) {
    el.style.borderBottom= "3px solid white";
  }

var i = 0;
var images = [];
var time = 3000;

images[0] = 'https://i.ibb.co/nPss4mz/whale2.gif';
images[1] = 'https://i.ibb.co/YdjNcwY/Icecream-export.gif';
images[2] = 'https://i.ibb.co/3hJVcxC/511-PQMT3-GJL.gif';
images[3] = 'https://i.ibb.co/M71TtMX/d17d0b08c6a7752a46fe5cb3e2615518-1-1-export.png';
images[4] = 'https://i.ibb.co/WPx8P7V/The-girl.gif';

function changeImg() {
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()" , time);
}

   window.onload = changeImg;


