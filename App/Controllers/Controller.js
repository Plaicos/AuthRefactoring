var App = require("../../Application");
var UseCaseOperator = require("../UseCases/Operator");

module.exports = class Controller {
    static async CreateCredential(call, callback) {
        try {
            let request = App.Adapters.GrpcRequest.ToNewCredential(call);
            await UseCaseOperator.CreataNewCredential(request);
            callback(null, { status: "ok" })
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static async AuthenticateToken(call, callback) {
        try {
            let request = App.Adapters.GrpcRequest
            await UseCaseOperator.AuthenticateTokenAndGetCredential();
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static HandleError(callback, error) {

    }
}