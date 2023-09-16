if (/Mobi|Android/i.test(navigator.userAgent)) {
 
  window.location.href = "g3r0m4.github.io";
} else {
  
  Example: window.location.href = "github.com";
}




$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  particlesJS.load('particles-js', 'particlesjs.json');
});