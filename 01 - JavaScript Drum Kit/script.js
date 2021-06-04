function playSound(e)

{   
    if(e.key=='CapsLock')
    {
        this.alert('Switch off Capslock key')
    }

    console.log(e)
    // Setting up audio to sound better
    const audio = document.querySelector(`audio[data-key=${e.key}]`)
    console.log(audio)
    if(!audio) return; //stop the function in irrelevant keys
    audio.currentTime = 0; //rewinds to the start time of the audio, so you can play a key repeat
    audio.play();

    //setting up the animations for the keys
    const key = document.querySelector(`.key[data-key=${e.key}]`)
    console.log(key)
    key.classList.add('playing');

}

function removeTransition(e)
{
    if(e.propertyName != 'transform') return;
    console.log(e.propertyName)
    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition))
window.addEventListener('keydown',playSound)