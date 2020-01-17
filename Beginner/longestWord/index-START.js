/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes herefunction reverseString(text) {
    let result = ""

    for( let char of text){
        result=char+result
    }

    return result

}


module.exports = longestWord