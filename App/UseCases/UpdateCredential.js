var App = require("../../Application");

module.exports = async (credential) => {
    try {
        let credentialAlreadyExist = await App.Dependencies.DAO.CheckIfCredentialExist(credential.User);
        if(!credentialAlreadyExist){
            throw new Error(`The user '${credential.User}' does not exist`);
        }
        await App.Dependencies.DAO.UpdateCredential(credential);
        return;
    }
    catch (erro) {
        throw erro;
    }
}