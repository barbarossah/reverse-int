module.exports = function reverse (n) {
  let result;
  numStr = String(n);
  for (let i = 0; i < numStr.length; i++) {
    result = `${numStr[i]}${result}`; 
  }
  return parseInt(result);
}
