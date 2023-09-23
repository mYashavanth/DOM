let input = ["MA", "SA", "I", "SCH", "OOL"];
let input2 = ["ma", "sa", "i", "sch", "ool"];

const lowerChar = (char) => {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<upper.length; i++){
        if(upper[i]==char){
            return lower[i]
        }else if(lower[i]==char){
            return upper[i]
        }
    }
}
const lowerWord = (word) => {
    let bag = "";
    for(let i=0; i<word.length; i++){
        bag += lowerChar(word[i])
    }
    return bag;
}
const lowerCaseArray = (arr) => {
    return arr.map(ele => {
        return lowerWord(ele);
    })
}
console.log(lowerCaseArray(input));
console.log(lowerCaseArray(input2));