console.log("module & namespaces 👻");
// namespaces are for grouping things, prevents polution
// of the global scope
// namespaces are imported with
/*

/// <reference path="circleMath.js">
/// <reference path="rectangleMath.js">

*/
var MyMath;
(function (MyMath) {
    const PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, height) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
