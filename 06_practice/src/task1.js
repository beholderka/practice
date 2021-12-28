/*Напишите функцию, которая поверхностно находит пересечения объектов и
возвращает объект пересечений.
Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }*/


function intersectionObject(object1, object2) {
    if (!(typeof object1 === 'object' && typeof object2 === 'object')
        || (object1 === null) && (object2 === null)) {

        return false;
    }

    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
    const propsSymbol1 = Object.getOwnPropertySymbols(object1);
    const propsSymbol2 = Object.getOwnPropertySymbols(object2);
    let result = {};
    const commonProps = props1.filter(el => props2.indexOf(el) > -1);
    const commonPropsSymbol = propsSymbol1.filter(el => propsSymbol2.indexOf(el) > -1);

    if (commonProps.length > 0) {
        for (let item in commonProps) {

            if (object1[commonProps[item]] === object2[commonProps[item]]) {

                result[commonProps[item]] = object2[commonProps[item]];
            }
        }

    }
    if (commonPropsSymbol.length>0) {
        for (let item in commonPropsSymbol) {

            if (object1[commonPropsSymbol[item]] === object2[commonPropsSymbol[item]]) {

                result[commonPropsSymbol[item]] = object2[commonPropsSymbol[item]];
            }
        }
    }

    return result;
}

module.exports.intersectionObject = intersectionObject;