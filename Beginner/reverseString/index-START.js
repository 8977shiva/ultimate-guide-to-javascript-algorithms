/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return  text.split('').reverse().join('');
    // Code goes here
    // var  rev=""
    // for(let char of text){
    //     rev=char+rev

    // }
    // return rev
}



module.exports = reverseString