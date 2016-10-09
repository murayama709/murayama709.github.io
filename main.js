jQuery(function($){
  window.odometerOptions = {
    auto: false
  };

  odometer = new Odometer({
    el: $('.roulette')[0],
    value:0,
    duration: 5000,
    animation: 'notcount'
    theme: 'car',
    format: '(,ddd).dd',
  });
  odometer.render();
 
  timerid = setTimeout(function(){
    odometer.update(100);
  },5000);

});

function printNum() {
    var max = Number($("#max").val());
    randnum = randInt(max);
    $(".roulette").text(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
