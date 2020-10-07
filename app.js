window.addEventListener('keydown', function(e){

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let button = document.querySelector(`button[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;
    audio.play();
    console.log(button)
    button.classList.add('buttonclicked'); 
    animate(button).then(()=>{
        return;
    })
})

async function animate(button){
    setTimeout(()=>{
        button.classList.remove('buttonclicked');
    },100);
}