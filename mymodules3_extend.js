const LogOne = require('./mymodules3');

exports.LogTwo = function() {
    console.log("my name is midxle");

    this.LogThree = function() {
        const logThree=LogOne;
        logThree.logger();
    }
}