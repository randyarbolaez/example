var palindromeTest = prompt("Enter string");
var re = /[\W_]/g;

var lowReg = palindromeTest.toLowerCase().replace(re, '');
var reverseStr = lowReg.split('').reverse().join('');



if (lowReg === reverseStr){
  console.log("String is palindrome")
}else {
  console.log('String is not a palindrome')
}
  
  
















