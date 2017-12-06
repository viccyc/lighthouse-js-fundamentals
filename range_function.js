function range(start, end, step) {
  for (var i = start; i <= end; i = i + step) {
    console.log(i);
  }
}

range(0, 10, 2);
range(10, 30, 5);
range(-5, 2, 3);
range(5, 2, -1);
