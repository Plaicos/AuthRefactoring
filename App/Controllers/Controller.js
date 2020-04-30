var App = require("../../Application")

module.exports = class Controller {
    static CreateCredential(call, callback) {
        try {
            let request = App.Adapters.GrpcRequest.ToNewCredential(call);
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static HandleError(callback, error){

    }
}