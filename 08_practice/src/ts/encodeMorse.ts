import {MorseSymbol,mappings} from "./MorseSymbol";

function findSpecialWords(text: string): string {
    let resultEncode = '';
    const specialWords = ['SOS'];
    const words = text.toUpperCase().trim().split(' ');
    if (specialWords.filter((value) => words.includes(value)).length > 0) {
        words.forEach((word) => {
            if (specialWords.includes(word)) {
                resultEncode = resultEncode.concat('   ', encodeMorse(word, false).split(' ').join(''))
            } else {
                resultEncode = resultEncode.concat('   ', encodeMorse(word, false))
            }
        })
    }
    return resultEncode.trim();
}

export function encodeMorse(text: string, firstCall: boolean = true): string {
    let resultEncode = '';
    if (firstCall) {
        resultEncode = findSpecialWords(text);
        if (resultEncode !== '') return resultEncode;
    }
    const letters = text.toUpperCase().trim().split('');
    letters.forEach((char) => {
        if (char === ' ') {
            resultEncode = resultEncode.concat('  ');
        } else {
            const morseSymbols = mappings.filter((morseSymbol: MorseSymbol) => {
                return morseSymbol.translation === char;
            });
            if (morseSymbols.length > 0) {
                resultEncode = resultEncode.concat(morseSymbols[0].symbol, ' ');
            }
        }

    })
    return resultEncode.trim();
}
