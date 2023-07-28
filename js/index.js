
// Typing greeting

$(function(){
    $('.greeting').typed({
        strings: ["Hey.", "Hi.", "Yo.", "What's up?"],
        typeSpeed: 70,
        startDelay: 600, 
        backDelay: 4000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|"
    });

    $('.tools').typed({
        strings: ["Tools"],
        typeSpeed: 40,
        startDelay: 200, 
        backDelay: 3480,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|"
    });

    $('.languages').typed({
        strings: ["Languages"],
        typeSpeed: 40,
        startDelay: 200, 
        backDelay: 3000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|"
    });
});