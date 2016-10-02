setTimeout(function(){
    odometer.innerHTML = 457;
}, 1000);

function printNum() {
    var max = Number($("#max").val());
    randnum = randInt(max);
    $(".odometer").text(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
