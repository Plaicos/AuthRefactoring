var App = require("../../Application");

module.exports = async (credential) => {
    try {
        await App.Dependencies.DAO.PersistCredential(credential);
        return;
    }
    catch (erro) {
        throw erro;
    }
}