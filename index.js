


// Detecting click press ------------->

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        let buttonInnerHTML = this.innerHTML;   

        makeSound(buttonInnerHTML);
        buttonAnimation (buttonInnerHTML);

    }
 )

}



// Detecting keyboard press ------------->


document.addEventListener("keydown", (event) => {

    makeSound(event.key);
    buttonAnimation (event.key);

})

//  Function to play the sound 


function makeSound(key) {

    switch (key) {
        case "w":

            let audio1 = new Audio("/Drum-kit/sounds/crash.mp3")
            audio1.play();

            break;
        case "a":

            let audio2 = new Audio("/Drum-kit/sounds/kick-bass.mp3")
            audio2.play();

            break;
        case "s":

            let audio3 = new Audio("/Drum-kit/sounds/snare.mp3")
            audio3.play();

            break;
        case "d":

            let audio4 = new Audio("/Drum-kit/sounds/tom-1.mp3")
            audio4.play();

            break;
        case "j":

            let audio5 = new Audio("/Drum-kit/sounds/tom-2.mp3")
            audio5.play();

            break;
        case "k":

            let audio6 = new Audio("/Drum-kit/sounds/tom-3.mp3")
            audio6.play();

            break;
        case "l":

            let audio7 = new Audio("/Drum-kit/sounds/tom-4.mp3")
            audio7.play();

            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation (currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    
    
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        
    }, 300);
   
    
}
