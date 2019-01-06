/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
var CountString = function (text) {
    return text.length;
}

// Replace the first word in the chain to a C
var ReplaceThis = function (text) {
    var arr = text.split(' ');
    arr[0] = 'C';

    return arr.join(' ');

}

// Concatenate the two strings
var ConcatString = function (text1, text2) {
    return text1.concat(text2);
}

// Display the fifth character of the string
var DisplayChar5 = function (text) {
    return text[4];
}

// Display the first 9 characters
var DisplayChar9 = function (text) {
    return text.substring(0, 9);
}
// Capitalize the string

var CapitalString = function (text) {
    return text.toUpperCase();
}

// Put the string in lowercase
var MinimalizeString = function (text) {
    return text.toLowerCase();
}

// Delete spaces before and after the chain
var SupprEspaceString = function (text) {
    return text.trim();
}

// Show true if the input parameter of the function is of type string
var IsString = function (text) {
    return typeof text === 'string';
}

// Display the file extension
var ExtensionString = function (text) {
    var arr = text.split('.');
    return arr[1];
}

// Count the number of spaces in the chain
var NumberEspaceString = function (text) {
    var arr = text.split(' ');
    return arr.length - 1;
}

// Reverse a string of characters
var InverseString = function (text) {
    return text.split('').reverse().join('');
}

/**
 * Oefeningen over getallen en wiskundige berekeningen
 */

 // Calculate the power of one number in relation to another (x to the power y)
var CalculationPower = function (x, y) {
    return Math.pow(x, y);
}

// Display the absolute value of a number
var ValueAbsolute = function (number) {
    return Math.abs(number);
}

// Display the absolute values of several numbers
var ValueAbsoluteArray = function (array) {
    return array.map(function (item) {
        return Math.abs(item);
    });
}

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
var SufaceCircle = function (radius) {
    return Math.round(Math.PI * radius * radius);
}

// Calculate the hypothenuse of a rectangular triangle
var Hypothenuse = function (ab, ac) {
    return Math.sqrt(ab * ab + ac * ac);
}

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
var CalcIBM = function (weight, height) {
    return Number((weight / (height * height)).toFixed(2));
}


