var App = require("../../../Application")
var Controller = require("../../../App/Controllers/Controller")

//MUST implement the .proto file
module.exports = class gRPCServcieImplementation {
    async CreateCredential(call, callback) {
        await Controller.CreateCredential(call, callback);
    }

    async AuthenticateToken() {
        await Controller
    }
}