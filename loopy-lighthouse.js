for (var i = 100; i < 201; i++) {
  if ((i % 4 === 0) && (i % 3 === 0)) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
//  console.log(i);
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}