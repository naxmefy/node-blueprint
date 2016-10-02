'use strict';

// TODO: RC Loader for Blueprint default config
//

var minimist = require('minimist');
var pkg = require('../package.json');

exports = module.exports = function blueprint () {
    const args = minimist(process.argv.slice(2), defaultMinimistOptions);

    if(args.v) {
        console.log(pkg.version);
        process.exit(0);
    }


};

const defaultMinimistOptions = {
    boolean: [
        'version'
    ],
    alias: {
      version: 'v'
    },
    stopEarly: false,
    '--': true
};