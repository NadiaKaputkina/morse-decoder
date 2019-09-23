const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedMorseExpr = '';

    for (let i = 0; i < expr.length; i += 10) {
        let binaryLetter = expr.substr(i, 10);

        if (binaryLetter === '**********') {
            decodedMorseExpr += ' ';
        } else {
            let morseLetter = '';

            for (let j = 0; j < expr.length; j += 2) {
                let letter = binaryLetter.substr(j, 2);

                switch (letter) {
                    case '10':
                        morseLetter += '.';
                        break;
                    case '11':
                        morseLetter += '-';
                        break;
                    default:
                        break;
                }
            }

            decodedMorseExpr += MORSE_TABLE[morseLetter];
        }
    }

    return decodedMorseExpr;
}

module.exports = {
    decode
}