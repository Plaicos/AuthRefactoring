var App = require("../../Application");

// profile is type string
module.exports = async (credential, profile) => {
    try {
        let isAuthorized = App.Entities.Credential.Authorize({ credential, profile });

        if (isAuthorized) {
            return true;
        }
        throw Error("Unauthorized Request");
    }
    catch (erro) {
        throw erro;
    }
}