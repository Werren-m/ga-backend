"use strict";

var print = function print(x) {
  if (x) {
    console.log(x);
  } else {
    console.log("Print works");
  }
};

var scrolls = [{
  name: "Scroll of protections",
  power: 150,
  type: "Defense"
}];
module.exports = {
  print: print,
  scrolls: scrolls
};