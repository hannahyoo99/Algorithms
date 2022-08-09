/*Given a string,
return a new string with the duplicate characters excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba"

/**
* De-dupes the given string.
* - Time: O(?).
* - Space: O(?).
* @param {string} str A string that may contain duplicates.
* @returns {string} The given string with any duplicate characters removed.
*/
// function stringDedupe(str) {
//     var newStr = ""
//     for (var i = 0; i<str.length; i++){
//         for (var j= 0; j<str.length; j++){
//             if (str[i] == newStr[j]){
//                 break;
//             }
//             if (j == i){
//                 newStr+= str[i];
//             }
//         }
//     }
//     return newStr
// }
function stringDedupe(str){
    let newStr= "";
    const seen = {};
    for (let i = str.length-1; i >=0; i --){ //loop backwards to include last occurrence
        if(!seen[str[i]]){
            newStr = str[i] + newStr
            seen[str[i]] = true;
        }
    }
        return newStr;
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));

/*****************************************************************************/

/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
* Reverses the letters in each words in the given space separated
* string of words. Does NOT reverse the order of the words themselves.
* - Time: O(?).
* - Space: O(?).
* @param {string} str Contains space separated words.
* @returns {string} The given string with each word's letters reversed.
*/
function reverseWords(str) {
    var splitStr = str.split(" "); //split the word at space
    var newStr= "";
    for (var i = 0; i<splitStr.length; i++){ //goes through each word in spitStr
        for (var j = splitStr[i].length-1; j>=0; j--){ //goes through each character backwards
            newStr+= splitStr[i][j];
        }
        newStr+= " " //add space that was taken away at split
    }
    return newStr
}

function reverseWords(str) {
    let reversed = "";
    let temp = ""
    for (let char of str){
        if (char === " "){
            reversed += temp + " "
            temp = ""
        } else {
            temp = char + temp
        }
    }
    //capture last word
    reversed += temp;
    return reversed
}


console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg
