// Define branded interfaces for Major and Minor credits
export interface MajorCredits {
  credits: number;
  _brand: "major"; // unique brand for type safety
}

export interface MinorCredits {
  credits: number;
  _brand: "minor"; // unique brand for type safety
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major"
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor"
  };
}

// Example usage (optional for testing)
const math: MajorCredits = { credits: 10, _brand: "major" };
const physics: MajorCredits = { credits: 5, _brand: "major" };

const history: MinorCredits = { credits: 4, _brand: "minor" };
const geography: MinorCredits = { credits: 3, _brand: "minor" };

console.log(sumMajorCredits(math, physics)); // {credits: 15, _brand: "major"}
console.log(sumMinorCredits(history, geography)); // {credits: 7, _brand: "minor"}
