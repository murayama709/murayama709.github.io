function printMsg() {
    randnum = randInt(100);
    alert(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
