let quoteString = `Failure is simply the opportunity to begin again this time more intelligently.`;
let quoteString1 = quoteString.toUpperCase();

let authorString = `- Henry Ford`;

let completeString = (quoteString1.concat(' ', authorString));

//console.log(completeString)

let quoteString2 = `Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King`
//let lowerCaseString3 = quoteString2.toLowerCase()

let charOfStringTwo = lowerCaseString3.charAt(4)
alert(`The character at location 3 is ${charOfStringTwo}.`)

findString = quoteString2.split(0,35)

console.log(findString)
console.log(quoteString2.substr(35,135))