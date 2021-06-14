"use strict";

// BREAK CAMELCASE

const breakCamelCase = function (str = "") {
  let strShorten = "";
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (
      str[i] === str[i].toUpperCase() &&
      str[i].toLowerCase() !== str[i].toUpperCase()
    ) {
      strShorten += ` ${el}`;
      continue;
    }
    strShorten += el;
  }

  return strShorten;
};

breakCamelCase("camelCasing");
breakCamelCase("berkay");
breakCamelCase("camelCasingTestBlobAnns");

const { length: len } = "berkay";
console.log(len);

// MADE BY BBKORU
