var App = require("../../Application")

module.exports = class UseCaseOperator {
    static async CreataNewCredential(newCredential) {
        try {
            let credential = await App.UseCases.CreateCredential(newCredential);
            await App.UseCases.RegisterCredential(credential);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async AuthenticateTokenAndGetCredential() {
        
    }
}