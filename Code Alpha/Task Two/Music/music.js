let progress = document.getElementById('progress')
let song = document.getElementById('song')
let controlIcon = document.getElementById('controlIcon')

    song.onloadedmetadata = () => {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }

    let playPause = () => {
        if(controlIcon.classList.contains('fa-pause')){
            song.pause();
            controlIcon.classList.remove('fa-pause')
            controlIcon.classList.add('fa-play')
        }else{
            song.play()
            controlIcon.classList.add('fa-pause')
            controlIcon.classList.remove('fa-play')
        }
    }

    if(song.play){
        setInterval(() =>{
            progress.value = song.currentTime
        }, 500)
    }

    progress.onchange = () => {
        song.play()
        song.currentTime = progress.value;
    }