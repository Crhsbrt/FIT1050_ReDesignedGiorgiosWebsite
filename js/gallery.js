let index = 1;
showGallery(index);

function plusImage(n) {
  showGallery(index += n);
}

function currentImage(n) {
  showGallery(index = n);
}

function showGallery(n) {
  let i;
  let gallery = document.getElementsByClassName("gallery");
  let dots = document.getElementsByClassName("dot");
  if (n > gallery.length) {index = 1}    
  if (n < 1) {index = gallery.length}
  for (i = 0; i < gallery.length; i++) {
    gallery[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  gallery[index-1].style.display = "block";  
  dots[index-1].className += " active";
}