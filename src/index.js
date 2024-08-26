module.exports = function toReadable (number) {
  
  
    if (number === 0) {
        return "zero";
    }

    const ones = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
        "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    const hundreds = "hundred";

    let result = "";

    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + " " + hundreds;
        number %= 100; // Get the remainder after extracting hundreds
        if (number > 0) result += " ";
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10)];
        number %= 10; // Get the remainder after extracting tens
        if (number > 0) result += " ";
    }

    if (number > 0) {
        result += ones[number];
    }

    return result.trim();
}
  

