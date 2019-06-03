const argv = require('yargs').argv
const bmd = require('./bmd')
// console.log('point', bmd.get_schema('point'));
// console.log("\n")
// console.log('line', bmd.get_schema('line'));
// console.log("\n")
// console.log('room', bmd.get_schema('room'));
// console.log("\n")
// console.log('level', bmd.get_schema('level'));
// console.log("\n")


//point
// obj = {x: 3, y: 7}
// isValid = bmd.validate('point', obj)
// console.log('point', isValid)


//line
// obj = {
//     a: {x: 5, y: 6},
//     b: {x: 7, y: 8}
// }
// isValid = bmd.validate('line', obj)
// console.log('line', isValid)

//room
obj = {
    number: 7,
    boundaryPoints: [{x: "number", y: "number"}]
}
isValid = bmd.validate('line', obj)
console.log('line', isValid)


// if (argv.ships > 3 && argv.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!')
// } else {
//     console.log('Retreat from the xupptumblers!')
// }
