console.log('main.js loaded!');

var paused = false;
var win = false;
var grid = [];
var cell = {
                state: "avocado", //empty, avo, guac
                position: "4",
};

if (state = avo) {
  win = false;
}

/*
Render:
when to render?
  -game is won*
  -game starts*
  -when click on avo*
  -when avo appears // triggered by a tick render
  -when pause*
  -when restart* // * is a user driven event

when render, what data?
  -paused = false
  -win = false
  -start = false
