const argv = require('yargs').argv
const bmd = require('./bmd')
console.log(bmd.get_schema('line'));
if (argv.ships > 3 && argv.distance < 53.5) {

    console.log('Plunder more riffiwobbles!')
} else {
    console.log('Retreat from the xupptumblers!')
}
