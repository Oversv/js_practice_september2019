function capitalize(word) {
    if (word === undefined) throw new Error("word is required");

    const firstLetter = word.charAt(0).toUpperCase();

    return firstLetter + word.slice(1);
}

function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");

    const firstNameInitial = firstName.charAt(0).toUpperCase();
    const lastNameInitial = lastName.charAt(0).toUpperCase();

    return `${firstNameInitial}.${lastNameInitial}`;
}

function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");

    //toFixed formats a number with the number of decimals (n), return a string
    let result = (originalPrice + (vatRate / 100 * originalPrice)).toFixed(2);
    return Number(result);
}

function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");

    let result = (originalPrice - (reduction / 100 * originalPrice)).toFixed(2);
    return Number(result);

}

function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");

    const strLength = str.length;

    if (strLength % 2 === 0) return str.slice((strLength / 2) - 1, (strLength / 2) + 1);
    return str.slice(strLength / 2, (strLength / 2) + 1);
}

function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    return word.split("").reverse().join("");
}

function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    return words.map(e => e.split("").reverse().join(""));
}

function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");
    let count = 0;

    for (let key in users) {
        if (users[key].type === "Linux") count++;
    }

    return count;

}

function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");
    let result = (scores.reduce((a, b) => a + b) / scores.length).toFixed(2);

    return Number(result);
}

function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");

    //Example 1
    /*
    let result;
    if (n % 5 === 0 && n % 3 === 0) result = 'fizzbuzz';
    else if (n % 3 === 0) result = 'fizz';
    else if (n % 5 === 0) result = 'buzz';
    else result = n;

    return result;
    */

    //Example 2
    if (n % 5 === 0 && n % 3 === 0) return 'fizzbuzz';
    else if (n % 3 === 0) return 'fizz';
    else if (n % 5 === 0) return 'buzz';
    else return n;

}

module.exports = {
    capitalize,
    generateInitials,
    addVAT,
    getSalePrice,
    getMiddleCharacter,
    reverseWord,
    reverseAllWords,
    countLinuxUsers,
    getMeanScore,
    simpleFizzBuzz
};