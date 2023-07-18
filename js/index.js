
// Typing greeting

$(function(){
    $('.greeting').typed({
        strings: ["Hey.", "Hi.", "Yo.", "What's up?"],
        typeSpeed: 70,
        startDelay:600, 
        backDelay: 4000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|"
    });
});