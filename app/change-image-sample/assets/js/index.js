var myImg = document.querySelector('img');
myImg.onclick = function () {
    var mySrc = myImg.getAttribute('src');
    if(mySrc === './assets/images/change-image1.png') {
        myImg.setAttribute('src', './assets/images/change-image2.png');
    } else {
        myImg.setAttribute('src', './assets/images/change-image1.png');
    }
};