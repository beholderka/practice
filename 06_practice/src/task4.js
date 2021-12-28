/*Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
Ожидаемый результат: ({}) => true,
({ a: undefined }) => true,
({ a: 1 }) => false*/

function isEmpty(value) {
    if (typeof value !== 'object') {
        return false;
    }

    if (value === null) {
        return true;
    }

    const props = Object.getOwnPropertyNames(value);
    const propsSymbol= Object.getOwnPropertySymbols(value);
    let result = true;
    if (props.length > 0) {
        for (let item in props) {
            result = result && value[props[item]] === undefined;

        }
    }
    if (propsSymbol.length > 0) {
        for (let item in propsSymbol) {
            result = result && value[propsSymbol[item]] === undefined;

        }
    }

    return result;

}

module.exports.isEmpty = isEmpty;