function isPalindrome(word) {
  // Write your algorithm here

    // iterate from the beginning to the middle
    for (let i = 0; i < word.length / 2; i++) {
      // check each letter to the correponding letter from the end
      const j = word.length - 1 - i;
      // if any letters don't match, return false
      if (word[i] !== word[j]) return false;
    }
  
    // return true
    return true;
}
  

/* 
  Add your pseudocode here

    a PSEUCODE HERE

*/

/*
  Add written explanation of your solution here

  Add written explanation of your solution here
  I need to make a isPalindrome function that returns either true or false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
