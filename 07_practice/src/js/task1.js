/*1)Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
который параметром принимает строку, а возвращает ее в перевернутом виде, метод
ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее
первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
первую букву каждого слова этой строки.
Наш класс должен работать так:
var str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
*/

class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        if (str.length >= 1) {
            str = str[0].toUpperCase()+str.substr(1);
        }
        return str;
    }

    ucWords(line) {
       let arrLine = line.split(' ');
       for (let index in arrLine) {
           arrLine[index]=this.ucFirst(arrLine[index]);
       }
       return arrLine.join(' ');
    }
}

let str = new MyString();


console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'