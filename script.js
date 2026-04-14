document.addEventListener("DOMContentLoaded", function(){

/* ======================
FEATURE BUTTONS
====================== */

const startBtn = document.getElementById("startBtn");
const pomodoroBtn = document.getElementById("pomodoroBtn");
const progressBtn = document.getElementById("progressBtn");
const focusBtn = document.getElementById("focusBtn");

if(startBtn){
startBtn.addEventListener("click", function(){
window.location.href = "pomodoro.html";
});
}

if(pomodoroBtn){
pomodoroBtn.addEventListener("click", function(){
window.location.href = "pomodoro.html";
});
}

if(progressBtn){
progressBtn.addEventListener("click", function(){
window.location.href = "progress.html";
});
}

if(focusBtn){
focusBtn.addEventListener("click", function(){
window.location.href = "focus.html";
});
}

/* ======================
DARK MODE
====================== */

const darkBtn = document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click", function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("darkMode","enabled");
}else{
localStorage.setItem("darkMode","disabled");
}

});

}

/* ======================
APPLY DARK MODE ON LOAD
====================== */

if(localStorage.getItem("darkMode") === "enabled"){
document.body.classList.add("dark");
}

});
