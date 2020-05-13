var App = require("../../../Application")
var Controller = require("../../../App/Controllers/Controller")

//MUST implement the .proto file
module.exports = class gRPCServcieImplementation {
    async CreateCredential(call, callback) {
        await Controller.CreateCredential(call, callback);
    }

    async GenerateAuthenticationToken(call, callback){
        await Controller.GenerateAuthenticationToken(call, callback);
    }

    async AuthenticateToken(call, callback){
        await Controller.AuthenticateToken(call, callback);
    }

    async AuthorizeCredential(call, callback){
        await Controller.AuthorizeCredential(call, callback);
    }
}