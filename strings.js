// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

const dailyPoem = "I can walk in the park all day!";
console.log(dailyPoem.slice(17, 23));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

const hey = "Hello World";
console.log(hey.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 

const hippytHi = "Hello Earthling";
console.log(hippytHi.toLowerCase());
// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

const programLanguage = "JavaScript";
console.log(programLanguage.slice(3, 6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 

console.log("nice shoes".includes("l, n"));
// false

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
// 2 ways:
console.log("B" + "Bananas" + "B");
// BBananasB

function front_back(str)
{
  first = str.slice(0,1);
  return first + str + first;
}
console.log(front_back('Banana'));
// BBananasB


// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

function front_back(str)
{
  first = str.slice(8, 11);
  return first + str + first;
}
console.log(front_back('SuperDupper'));
// perSuperDupperper



// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

const word = "BoogieWoogie";
const selectLetter = word[0];
const lastLetter = word[word.length-1];
const remainWord = word.substring(1, word.length-1);
console.log(lastLetter + remainWord + selectLetter);

// eoogieWoogiB

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
const firstName = "Maria";
const city = "Berlin";
const position = "student";
const message = `My name is  ${firstName} . I live in  ${city}  and I am a  ${position}.`;
console.log(message);

// My name is  Maria . I live in  Berlin  and I am a  student.

// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

const fox = "the quick brown fox";
const firstLetter = fox[0].toUpperCase();
const remain = fox.slice(1);
console.log(firstLetter + remain);

// The quick brown fox