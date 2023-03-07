$(document).ready(function() {

    var nopes = ["Nope!","Almost got it!","Try again!","Not quite!"];
    var won = false;
    let x = Math.random() * ($(window).height() - $(".btn").width());
    let y = Math.random() * ($(window).width() - $(".btn").width());
    $(".btn").css({"top": x, "left": y});


    $(".btn").mouseenter(function() {
        if(!won) {
            let x = Math.random() * ($(window).height() - $(".btn").width());
            let y = Math.random() * ($(window).width() - $(".btn").width());
            let nope = Math.floor(Math.random() * nopes.length);

            $(".btn").css({"top": x, "left": y});
            $(".btn").html(nopes[nope]);
        }
    });

    $(".btn").click(function() {
        if(won) {
            reload();
        }
        won = true;
        $(".btn").html("Play again!");
        $(".btn").css({"top": "50%", "left": "50%"});
        
        $(".winner").css({"display": "block"});
    });
});

function reload() {
    location.reload();
}