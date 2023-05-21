const tom1Sound = new Audio("./sounds/tom-1.mp3");
const tom2Sound = new Audio("./sounds/tom-2.mp3");
const tom3Sound = new Audio("./sounds/tom-3.mp3");
const tom4Sound = new Audio("./sounds/tom-4.mp3");
const snareSound = new Audio("./sounds/snare.mp3");
const crashSound = new Audio("./sounds/crash.mp3");
const kickBassSound = new Audio("./sounds/kick-bass.mp3");

function makeSound(key) {
    switch (key) {
        case "w":
            tom1Sound.play();
            break;
        case "a":
            tom2Sound.play();
            break;
        case "s":
            tom3Sound.play()
            break;
        case "d":
            tom4Sound.play()
            break;
        case "j":
            snareSound.play()
            break;
        case "k":
            crashSound.play()
            break;
        case "l":
            kickBassSound.play()
            break;
        default:
            return 0;
    }
}

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var theInnerHTMLOfTheButton = this.innerHTML;
        buttonAnimation(theInnerHTMLOfTheButton);

        switch (theInnerHTMLOfTheButton) {
            case "w":
                tom1Sound.play();
                break;

            case "a":
                tom2Sound.play();
                break;

            case "s":
                tom3Sound.play();
                break;

            case "d":
                tom4Sound.play();
                break;

            case "j":
                snareSound.play();
                break;

            case "k":
                crashSound.play();
                break;

            case "l":
                kickBassSound.play();
                break;

            default:
                console.log(theInnerHTMLOfTheButton);
        }
    })
}

function buttonAnimation(eventButton) {
    var activatedButton = document.querySelector("." + eventButton);

    activatedButton.classList.add("pressed");
    
    setTimeout(function() {
        activatedButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener('keypress', function(pressedKey) {
    makeSound(pressedKey.key);
    buttonAnimation(pressedKey.key);
})