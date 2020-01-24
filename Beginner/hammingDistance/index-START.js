/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    // Code goes here
    var count=0
    stringA=stringA.toLowerCase();
    stringB=stringB.toLowerCase()
    if(stringB.length===stringA.length){
        for(let i=0; i<stringA.length;i++){
            if(stringA[i]!=stringB[i]){
                  count++
            }
        }
    }
    else{
        throw new Error('Strings do not have equal length')
    }
    return count
}



module.exports = hammingDistance