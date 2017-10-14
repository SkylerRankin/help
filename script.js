var draw_map = function(map, off_x, off_y, size, ctx, key) {
    for (var i=0; i<map.lengthl ++i)
      for (var j=0; j<map[0].length; ++j) {
        var a = map[j][i];
        ctx.fillStyle = key[a];
        ctx.fillRect(j*size + off_x, i*size + off_y, size, size);
      }
  }
