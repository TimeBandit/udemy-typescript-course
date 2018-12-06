console.log("module & namespaces 👻");
// namespaces are for grouping things, prevents polution
// of the global scope

// namespaces are imported with
/* 

/// <reference path="circleMath.js">
/// <reference path="rectangleMath.js">

*/

namespace MyMath {
  const PI = 3.14;

  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }

  export function calculateRectangle(width: number, height: number) {
    return width * length;
  }
}
