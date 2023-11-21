/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
  // Complete the function
  let word = name.split(" ");
  let size=word.length;
  if(size ===1)
  {
    let letter= name.charAt(0) + name.charAt(1);
    return letter.toUpperCase();
  }else if(size ===2)
  {
    let firstletter=word[0].charAt(0);
    let secondletter=word[1].charAt(0);
    let letter=firstletter + secondletter;
    return letter.toUpperCase();
  }else
  {
    let firstletter=word[0].charAt(0);
    let secondletter=word[size-1].charAt(0);
    let letter = firstletter + secondletter;
    return letter.toUpperCase();
  }
};

module.exports = createInitialsFromName;
