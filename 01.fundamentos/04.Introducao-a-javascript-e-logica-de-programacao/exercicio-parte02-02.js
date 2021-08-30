
let numbers = [1,2,50,20,505,13,99] 

function checkBiggerNum(numbers) {
 let biggestNumber = 0;
 let biggestIndex = 0;

  for (index = 0; index < numbers.length ; index += 1) {
   if (biggestNumber < numbers[index]) {
     biggestNumber = numbers[index];
     biggestIndex = [index];
   }

  }
return console.log('A maior posição é ' + biggestIndex);
}  


checkBiggerNum(numbers);




