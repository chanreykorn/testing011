
let dropdown = document.getElementById("dropdown_menu");
let bars = document.getElementById("bars");
let close = document.getElementById("close");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");
let google = document.getElementById("google");
let youtube = document.getElementById("youtube");
let linkedin = document.getElementById("linkedin");




bars.addEventListener("click", function(){
    dropdown.classList.add("active");
});
close.addEventListener("click", function(){
    dropdown.classList.remove("active");
});


// Footer icon link//
facebook.addEventListener("click", function(){
    window.location = "";
});
twitter.addEventListener("click", function(){
    window.location = "";
});
google.addEventListener("click", function(){
    window.location = "";
});
youtube.addEventListener("click", function(){
    window.location = "";
});
linkedin.addEventListener("click", function(){
    window.location = "";
});

