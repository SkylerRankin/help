$(window).ready(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  ctx.fillStyle='rgb(41,108,225)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (var row = 0; row < canvas.height / 20; row++)
    for (var col = 0; col < canvas.width / 20; col++) {
      if (Math.floor(Math.random()*5) < 1) {
        ctx.beginPath();
        ctx.moveTo(col*20, row*20);
        ctx.lineTo(col*20+20, row*20+20);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgb(2, 68, 182)';
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(col*20+20, row*20);
        ctx.lineTo(col*20, row*20+20);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgb(2, 68, 182)';
        ctx.stroke();
      }

    }
    draw_map(map, 100, 100, 30, mapcolors);

    function draw_map(map, off_x, off_y, size, key) {
      console.log(key);
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      console.log('drawing map ('+map.length+', '+map[0].length+')');
        for (var i=0; i<map.length; ++i)
          for (var j=0; j<map[0].length; ++j) {
            var a = map[j][i];
            if (a != 0) {
              ctx.fillStyle = key[a];
              ctx.fillRect(j*size + off_x, i*size + off_y, size, size);
            }

          }
      }
});
