# FreeCodeCamp-Challenges
This is my solution to challenges 

Diff Two Arrays 
---------------------
Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.

Where art thou 
---------------------
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Search and Replace
---------------------
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

DNA Pairing
---------------------
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Pig Latin
--------------------
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Roman Numeral Converter 
--------------------
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Missing letters
--------------------
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined

Convert HTML Entities
--------------------
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Sum All Odd Fibonacci Numbers
--------------------
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Sum All Primes
-------------------
Sum all the prime numbers up to and including the provided number.
A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
The provided number may not be a prime.

Finders Keepers
-------------------
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Sorted Union 
-------------------
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

Drop it
-------------------
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.
