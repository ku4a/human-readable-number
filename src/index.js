module.exports = function toReadable(number) {
    let numberWord;
    let numberArray = number.toString().split('');
    let words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    if (number <= 20) {
        numberWord = words[number];
    } else {
        if (numberArray.length === 2) {
            if (numberArray[1] > 0) {
                numberWord = words[numberArray[0] + '0'] + ' ' + words[numberArray[1]];
            } else {
                numberWord = words[number];
            }
        } else {
            numberWord = words[numberArray[0]] + ' hundred ';
            if (numberArray[2] > 0) {
                if (numberArray[1] > 0) {
                    if (numberArray[1] < 2) {
                        numberWord += words[numberArray[1] + numberArray[2]];
                    } else {
                        numberWord += words[numberArray[1] + '0'] + ' ' + words[numberArray[2]];
                    }
                } else {
                    numberWord += words[numberArray[2]];
                }
            } else if (numberArray[1] > 0) {
                numberWord += words[numberArray[1] + '0'];
            }
        }
    }
    return numberWord.trim();
}
