function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");

    return nums.map(n => Math.pow(n, 2));
}

function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");

    words = words.map(word => word[0].toUpperCase() + word.slice(1));
    words[0] = words[0].toLowerCase();

    return words.join('');
}

function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");

    let count = 0;

    people.forEach(obj => count += obj.subjects.length);

    return count;
}

function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");

    return menu.some(obj => obj.ingredients.includes(ingredient));
}

function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");

    let newArr = arr1.filter(n => arr2.includes(n))
        .sort((a, b) => a - b);

    return newArr.filter((n, index) => newArr.indexOf(n) === index);

    // With Set, Set create an object with unique values.
    /*
        let uniqueArr = new Set(newArr);
        return uniqueArr = [...uniqueArr]; //Transform the obj to array
    */
}

module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
};