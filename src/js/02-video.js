import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const CURRENT_TIME_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const pauseTime = localStorage.getItem(CURRENT_TIME_KEY);
console.log(pauseTime);

// console.dir(localStorage);
player.on('timeupdate', throttle(onSavePausedTime, 1000));

player.setCurrentTime(pauseTime);

function onSavePausedTime ({ seconds } = 0) {
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
    console.log(seconds);
}