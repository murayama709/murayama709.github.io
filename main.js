function printNum() {
    var max = Number($("#max").val());
    //alert(max);
    randnum = randInt(max);
    $("#rand").text() = randnum;
    //alert(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
