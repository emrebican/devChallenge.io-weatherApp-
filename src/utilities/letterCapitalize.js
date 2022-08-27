export const letterCapitalize = (letter) => {
    letter = letter?.split('')[0].toUpperCase().concat(letter.slice(1));
    return letter;
}