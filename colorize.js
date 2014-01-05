/*
 * colorize.js
 * Repo: https://github.com/SimonWaldherr/colorize.js
 * Demo: http://cdn.simon.waldherr.eu/projects/colorize.js/
 * License: MIT
 * Version: 0.0.3
 */

/*jslint indent: 2 */

function d2h(d) {
  'use strict';
  return Math.round(d).toString(16);
}

function h2d(h) {
  'use strict';
  return parseInt(h, 16);
}

function colorizejsr2g(integer, max) {
  'use strict';
  var input = Math.round(integer / max * 1000),
    hexcolor,
    startR = 254,
    startG = 1,
    startB = 24;

  if (input < 500) {
    startR -= input / 3;
    startG = input / 4;
  } else {
    startR = 88;
    startG += input / 4.1 + 3;
  }
  hexcolor = 'rgb(' + Math.round(startR) + ', ' + Math.round(startG) + ', ' + Math.round(startB) + ')';
  return hexcolor;
}

function colorizejsr2o2g(integer, max) {
  'use strict';
  var input = Math.round(integer / max * 1000),
    hexcolor,
    startR = 254,
    startG = 1,
    startB = 24;

  if (input < 499) {
    startG = input / 3;
    startB -= input / 26;
  } else if ((input < 502) && (input > 499)) {
    startR = 255;
    startG = 195;
    startB = 5;
  } else {
    startR = 379 - input / 4;
    startG += input / 9 + 109;
    startB += input / 22 - 41;
  }
  hexcolor = 'rgb(' + Math.round(startR) + ', ' + Math.round(startG) + ', ' + Math.round(startB) + ')';
  return hexcolor;
}

function colorizejsrnbw(integer, max) {
  'use strict';
  var input = Math.round(integer / max * 833),
    hexcolor,
    startR = 168,
    startG = 0,
    startB = 255;

  if (input < 166) {
    startR -= input;
    startG = input / 2.8;
    startB -= input / 6;
  }
  if ((input > 165) && (input < 334)) {
    startR = (input - 166) / 2.25;
    startG = 59 + (input - 166) / 1.03;
    startB = 228 + (input - 166) / 6.3;
  }
  if ((input > 333) && (input < 499)) {
    startR = 75 - (input - 333) / 2.3;
    startG = 223 - (input - 333) / 14.5;
    startB = 255 - (input - 333) * 1.3;
  }
  if ((input > 498) && (input < 667)) {
    startR = 1 + (input - 498) * 1.5;
    startG = 213;
    startB = 41 - (input - 498) / 5.3;
  }
  if ((input > 666) && (input < 834)) {
    startR = 251 + (input - 666) / 38;
    startG = 214 - (input - 666) * 1.26;
    startB = 10 - (input - 666) / 18;
  }

  hexcolor = 'rgb(' + Math.round(startR) + ', ' + Math.round(startG) + ', ' + Math.round(startB) + ')';
  return hexcolor;
}

function colorizejsb2w(integer, max) {
  'use strict';
  var input = Math.round(integer / max * 1000),
    hexcolor,
    startR = input / 3.92,
    startG = input / 3.92,
    startB = input / 3.92;

  hexcolor = 'rgb(' + Math.round(startR) + ', ' + Math.round(startG) + ', ' + Math.round(startB) + ')';
  return hexcolor;
}

function colorizejs(integer, max, spectrum) {
  'use strict';
  switch (spectrum) {
  case 'r2g':
    return colorizejsr2g(integer, max);
  case 'g2r':
    return colorizejsr2g((max - integer), max);
  case 'r2o2g':
    return colorizejsr2o2g(integer, max);
  case 'g2o2r':
    return colorizejsr2o2g((max - integer), max);
  case 'b2w':
    return colorizejsb2w(integer, max);
  case 'w2b':
    return colorizejsb2w((max - integer), max);
  case 'rnbw':
    return colorizejsrnbw(integer, max);
  default:
    return colorizejsr2g(integer, max);
  }
}
