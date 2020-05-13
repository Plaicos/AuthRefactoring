var App = require("../../Application");
var UseCaseOperator = require("../UseCases/Operator");

module.exports = class Controller {
    static async CreateCredential(call, callback) {
        try {
            let request = App.Adapters.GrpcRequest.ToNewCredential(call);
            await UseCaseOperator.CreataNewCredential(request);
            return callback(null, { status: "ok" });
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static async GenerateAuthenticationToken(call, callback) {
        try {
            let user = App.Adapters.GrpcRequest.ToGenerateTokenRequest(call);
            let token = await App.UseCases.GenerateAuthToken(user);
            return callback(null, { status: "ok", token: token });
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static async AuthenticateToken(call, callback) {
        try {
            let token = App.Adapters.GrpcRequest.ToAuthenticateTokenRequest(call);
            let credential = await UseCaseOperator.AuthenticateTokenAndGetCredential(token);
            return callback(null, credential);
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static async AuthorizeCredential(call, callback) {
        try {
            let request = App.Adapters.GrpcRequest.ToAuthorizeRequest(call);
            await UseCaseOperator.AuthorizeCredential(request);
            return callback(null, { status: "ok" });
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static HandleError(callback, error) {
        try {
            //console.log(error)
            return callback({
                message: error.message
            })
        }
        catch (erro) {
            throw erro;
        }
    }
}