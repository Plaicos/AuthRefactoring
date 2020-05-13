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

    static async AuthenticateTokenAndGetCredential(token) {
        try {
            let user = await App.UseCases.AuthenticateToken(token);
            return await App.UseCases.GetCredential(user);
        }
        catch (erro) {
            throw erro;
        }
    }

    static async AuthorizeCredential(authorizeRequest){
        try{
            let credential = authorizeRequest.Credential;
            let profile = authorizeRequest.Profile;
            return await App.UseCases.AuthorizeCredential(credential, profile);
        }
        catch(erro){
            throw erro;
        }
    }
}