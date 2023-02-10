const buttons = document.querySelectorAll(".drum");
const buttonAnim = (key) =>{
    let currentButton = document.querySelector("."+key);
    currentButton.classList.add("pressed");
    // currentButton.style.width = "180px";
    currentButton.style.height = "180px";
    setTimeout(() => {
        currentButton.classList.remove("pressed");
        // currentButton.style.width = "150px";
        currentButton.style.height = "150px";
    }, 200);

}
const keyChecker = (buttonInnerHTML) => {
    switch (buttonInnerHTML) {
        case 'a':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 's':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'd':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'f':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }

};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        keyChecker(buttonInnerHTML);
        buttonAnim(buttonInnerHTML);
    })
};

document.addEventListener("keydown", (event) => {
    keyChecker(event.key);
    buttonAnim(event.key);
});
