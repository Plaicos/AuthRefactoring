var App = require("../../Application");

module.exports = async (credential) => {
    try {
        let credentialAlreadyExist = await App.Dependencies.DAO.CheckIfCredentialExist(credential.User);
        if(credentialAlreadyExist){
            throw new Error(`The user '${credential.User}' already has a credential`);
        }
        await App.Dependencies.DAO.PersistCredential(credential);
        return;
    }
    catch (erro) {
        throw erro;
    }
}