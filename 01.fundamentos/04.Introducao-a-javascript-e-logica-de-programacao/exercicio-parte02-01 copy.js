
function checkPalindrome(nameOriginal) {
  let nameReverse = nameOriginal.split('').reverse().join('');
  let checkName = false;

  if (nameReverse === nameOriginal) {
    checkName = true;
  }
    return console.log(checkName);
}

checkPalindrome('osso');







