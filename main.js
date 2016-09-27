function printNum() {
    var max = Number($("#max").val());
    randnum = randInt(max);
    $("#disp").text(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
