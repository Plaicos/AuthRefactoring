var App = require("../../Application");

module.exports = async (user) => {
    try {
        let credentialAlreadyExist = await App.Dependencies.DAO.CheckIfCredentialExist(credential.User);
        if(!credentialAlreadyExist){
            throw new Error(`The user '${user}' does not exist`);
        }
        await App.Dependencies.DAO.DeleteCredential(user);
        return;
    }
    catch (erro) {
        throw erro;
    }
}