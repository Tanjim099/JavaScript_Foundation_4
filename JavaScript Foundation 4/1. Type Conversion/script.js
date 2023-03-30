function convertToNumber(str) {
  try {
    // Try to convert the string to a number
    return parseFloat(str);
  } catch (error) {
    // If an error occurs, return the "Invalid number" message
    return "Invalid number";
 }
}
const inputs = "123";
const result = convertToNumber(inputs);
console.log(result);
console.log(typeof result);