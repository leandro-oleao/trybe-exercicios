
let numbers = [1,2,50,20,505,-13,99] 

function checkSmallestNum(numbers) {
 let smallestNumber = 0;
 let biggestIndex = 0;

  for (index = 0; index < numbers.length ; index += 1) {
   if (smallestNumber > numbers[index]) {
     smallestNumber = numbers[index];
     biggestIndex = [index];
   }

return console.log('A menor posição é ' + biggestIndex);
}

}

checkSmallestNum(numbers);
