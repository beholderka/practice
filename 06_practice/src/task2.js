/*Напишите функцию, которая делает глубокое сравнение объектов.
Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c:
1 } }) => true
*/

function isEqual(object1, object2) {
    if (!(typeof object1 === 'object' && typeof object2 === 'object')
        || (Array.isArray(object1) && Array.isArray(object2))) {
        return false;
    } else if ((object1 === null) && (object2 === null)
        || ((JSON.stringify(object1) === '{}') && (JSON.stringify(object2) === '{}'))) {
        return true;
    }

    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
    let result = false;
    const propsSymbol1 = Object.getOwnPropertySymbols(object1);
    const propsSymbol2 = Object.getOwnPropertySymbols(object2);
    const commonProps = props1.filter(el => props2.indexOf(el) > -1);
    const commonPropsSymbol = propsSymbol1.filter(el => propsSymbol2.indexOf(el) > -1);

    if (commonProps.length > 0) {

        result = true;
        for (let item in commonProps) {

            if (typeof object1[commonProps[item]] === 'object') {
                result = result && isEqual(object1[commonProps[item]], object2[commonProps[item]]);
            } else {
                result = result && object1[commonProps[item]] === object2[commonProps[item]];
            }
        }

    }
    if (commonPropsSymbol.length > 0) {
        for (let item in commonPropsSymbol) {
            if (typeof object1[commonPropsSymbol[item]] === 'object') {
                result = result && isEqual(object1[commonPropsSymbol[item]], object2[commonPropsSymbol[item]]);
            } else {
                result = result && object1[commonPropsSymbol[item]] === object2[commonPropsSymbol[item]];
            }
        }
    } else if (propsSymbol1.length > 0 || propsSymbol2.length > 0) {
        result = false;
    }

    return result;

}

module.exports.isEqual = isEqual;