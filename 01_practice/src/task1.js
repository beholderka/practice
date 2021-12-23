function isPalindrome(str) {
    const strWithoutSpace = (String(str).split(' ').join('')).toLowerCase();
    const reversed=(strWithoutSpace.split("").reverse()).join('');
    return strWithoutSpace === reversed;

}
module.exports.isPalindrome=isPalindrome;