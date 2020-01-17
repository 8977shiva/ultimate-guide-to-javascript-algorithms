/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here
    

  let f = text.split('') 
  let unique = [... new Set(f)] 
  let res = unique.map((i,index)=>f.lastIndexOf(i)-f.indexOf(i)+1)
  
  return Map.max(...res)
}



module.exports = maxRecurringChar;