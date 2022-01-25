import {mappings, MorseSymbol} from "./MorseSymbol";

export function decodeMorse(morse: string): string {
    const symbols = morse.trim().split(' ');
    let resultDecode = '';
    symbols.forEach((encodeLetter, index) => {
        if (encodeLetter === '') {
            if (symbols[index - 1] !== '') {
                resultDecode = resultDecode.concat(' ');
            }
        } else {
            const morseSymbols = mappings.filter((morseSymbol: MorseSymbol) => {
                return morseSymbol.symbol === encodeLetter;
            });
            if (morseSymbols.length > 0) {
                resultDecode = resultDecode.concat(morseSymbols[0].translation);
            }
        }

    })
    return resultDecode.trim();
}
