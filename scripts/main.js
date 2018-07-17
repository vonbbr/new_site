
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox-Logo.png') {
        myImage.setAttribute ('src', 'images/firefox-logo-2.png');
    } else {
        myImage.setAttribute ('src', 'images/Firefox-Logo.png');
    }
}
