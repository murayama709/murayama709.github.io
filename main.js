function printNum() {
    var el = document.querySelector('.test');

od = new Odometer({
  el: el,
  value: 333555,

  // Any option (other than auto and selector) can be passed in here
  format: 'd'
});

od.update(555)
    var max = Number($("#max").val());
    randnum = randInt(max);
    $(".odometer").text(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
