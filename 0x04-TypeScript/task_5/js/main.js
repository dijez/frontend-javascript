"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
// Function to sum major credits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "major"
    };
}
// Function to sum minor credits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "minor"
    };
}
// Example usage (optional for testing)
var math = { credits: 10, _brand: "major" };
var physics = { credits: 5, _brand: "major" };
var history = { credits: 4, _brand: "minor" };
var geography = { credits: 3, _brand: "minor" };
console.log(sumMajorCredits(math, physics)); // {credits: 15, _brand: "major"}
console.log(sumMinorCredits(history, geography)); // {credits: 7, _brand: "minor"}
