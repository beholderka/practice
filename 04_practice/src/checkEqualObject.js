/*4) Напишите функцию, которая поверхностно сравнивает два объекта.
Ожидаемый результат: True если объекты идентичны,
false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
*/
function isEqualObject(object1, object2, propsArray) {
    let isEqual = true;
    if (propsArray.length > 0) {
        isEqual = true;

        for (let item in propsArray) {

            if (typeof object1[propsArray[item]] === 'object' && typeof object2[propsArray[item]] === 'object') {
                isEqual = isEqual && true;
            } else {
                isEqual = isEqual && object1[propsArray[item]] === object2[propsArray[item]];
            }
        }

    }
    return isEqual;
}

function checkEqualObject(object1, object2) {
    if (!(typeof object1 === 'object' && typeof object2 === 'object')) {
        return false;
    } else if ((object1 === null) && (object2 === null)
        || ((JSON.stringify(object1) === '{}') && (JSON.stringify(object2) === '{}'))) {
        return true;
    }

    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
    const propsSymbol1 = Object.getOwnPropertySymbols(object1);
    const propsSymbol2 = Object.getOwnPropertySymbols(object2);

    const commonProps = props1.filter(el => props2.indexOf(el) > -1);
    const commonPropsSymbol = propsSymbol1.filter(el => propsSymbol2.indexOf(el) > -1);

    if (props2.length > commonProps.length || props1.length > commonProps.length)
        return false;

    if (propsSymbol2.length > commonPropsSymbol.length || propsSymbol1.length > commonPropsSymbol.length)
        return false;


    return isEqualObject(object1, object2, commonProps) && isEqualObject(object1, object2, commonPropsSymbol);

}

module.exports.checkEqualObject = checkEqualObject;
