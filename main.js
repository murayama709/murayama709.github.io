jQuery(function($){
  window.odometerOptions = {
    auto: false
  };
 
  odometer = new Odometer({
    el: $('.hoge')[0],
    value:0,
    theme: 'default',
    format: 'd',
  });
  odometer.render();
 
  timerid = setTimeout(function(){
    odometer.update(100);
  },1000);
 
});

function printNum() {
    var max = Number($("#max").val());
    randnum = randInt(max);
    $(".odometer").text(randnum);
}

function randInt(max) {
    var i = 1 + Math.floor(Math.random() * max);
    return i;
}
