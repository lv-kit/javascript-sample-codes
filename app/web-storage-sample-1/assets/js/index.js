var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('名前を入力してください');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi!, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi!, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
};