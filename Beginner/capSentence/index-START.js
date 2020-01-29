/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // Code goes here
   text=text.toLowerCase().split(' ')
   var newText=[];
   for(let char of text){
    //  console.log(char)
    newText.push(char[0].toUpperCase()+char.slice(1))
   }
   return newText.join(' ');
}



module.exports = capSentence