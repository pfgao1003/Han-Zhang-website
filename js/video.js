function handlePlay() {
    return video.play();
}

function handlePause() {
    return video.pause();
}

function handleSkipAhead() {
    if (video.currentTime + 10 > video.duration) {
        video.load();
        return;
    }
    video.currentTime = video.currentTime + 10;
    return;
}

function handleMute() {
    video.muted = !video.muted;
    if (video.muted){
        document.getElementById("mute").innerHTML = "Unmute";
        document.getElementById("volume").innerHTML = "0%";
        document.getElementById("slider").value = 0;
        return;
    }
    document.getElementById("mute").innerHTML = "Mute";
    document.getElementById("volume").innerHTML = `${video.volume * 100}%`;
    document.getElementById("slider").value = video.volume * 100;
}

function handleSlider() {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = `${video.volume * 100}%`;
}

document.getElementById("volume").innerHTML = "100%";

const video = document.querySelector(".video")
video.autoplay = false;
video.loop = false;
video.load();

document.getElementById("play").addEventListener("click",handlePlay);
document.getElementById("pause").addEventListener("click",handlePause);
document.getElementById("skip").addEventListener("click",handleSkipAhead);
document.getElementById("mute").addEventListener("click",handleMute);
document.getElementById("slider").addEventListener("change",handleSlider);