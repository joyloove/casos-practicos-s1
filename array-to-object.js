var car = [
    ['brand', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
]

var student = [
    ['name', 'lulu'],
    ['age', 25],
    ['hobbie', 'cantar']
]

var arrayToObject = function(array2d) {
    var newObject = {};
    for (var i = 0; i < array2d.length; i++) {
        newObject[array2d[i][0] = array2d[i][1]]
    }
    return newObject;
}

console.log(arrayToObject(car))
console.log(arrayToObject(student))

var secondCar = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red'
}

var objectToArray = function(object) {
    var array2d = [];
    var properties = Object.keys(object);
    for (var i = 0; i < properties.length; i++) {
        array2d.push([properties[i], object[properties[i]]]);
    }
    return array2d;
}

console.log(objectToArray(secondCar))
