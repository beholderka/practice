/*Напишите свою реализацию метода bind*/

function myBind(func, context) {
    if (typeof func !== 'function')
        return false;
    return function() {
        return func.apply(context);
    };
}

module.exports.myBind=myBind;
