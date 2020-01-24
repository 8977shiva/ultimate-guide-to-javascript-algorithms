/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes herefunction reverseString(text) {
        textArr=text.split(' ');
        maxLength=0;
        longWord=''
       
        for(let char of textArr){
            if(char.length>maxLength){
                maxLength=char.length;
                longWord=char
    
            }
        }
     return longWord
}


module.exports = longestWord