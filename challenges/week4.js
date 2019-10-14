function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");

    return nums.filter(n => n < 1);
}

function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");

    return names.filter(name => name[0] === char);
}

function findVerbs(words) {
    if (!words) throw new Error("words is required");

    return words.filter(word => word.startsWith("to "));
}

function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");

    return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
    if (!users) throw new Error("users is required");

    let newArr = [];

    for (let i = 0; i < users.length; i++) {
        newArr.push(users[i].data.city.displayName);
    }

    return newArr;
}

function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");

    return nums.map(num => Number(Math.sqrt(num).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");

    return sentences.filter(sen => sen.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");

    return triangles.map(triangle => Math.max(...triangle));
}

module.exports = {
    findSmallNums,
    findNamesBeginningWith,
    findVerbs,
    getIntegers,
    getCities,
    getSquareRoots,
    findSentencesContaining,
    getLongestSides
};