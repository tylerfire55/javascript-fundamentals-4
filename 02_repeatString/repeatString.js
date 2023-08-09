const repeatString = function(string, num) {
        if (num < 0) {
            return "ERROR";
        } else if (num == 0) {
            return "";
        } else {
            for (i = 0; i < num; i++) {
                return string.repeat(num);
            }
        }
};
let string = "";
let num = 0;

// Do not edit below this line
module.exports = repeatString;
