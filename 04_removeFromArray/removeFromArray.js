const removeFromArray = function(array, ...numbers) {
    for (i = 0; i <= numbers.length; i++) {
        for (j = 0; j <= array.length; j++) {
            if (numbers[i] === array[j]) {
                array.splice(j, 1);
                break
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
