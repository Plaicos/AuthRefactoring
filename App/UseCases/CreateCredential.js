var App = require("../../Application");

module.exports = async (newCredential) => {
    try {
        let credential = new App.Models.Credential({ user: newCredential.User })

        if (newCredential.IsUser) {
            credential = App.Models.Credential.MakeUser(credential);
        }
        else if (newCredential.IsStaff) {
            credential.AccessLevel = 3;
        }
        else if (newCredential.IsMaintainer) {
            credential.AccessLevel = 2;
        }
        else if (newCredential.IsAdmin) {
            credential = App.Models.Credential.MakeAdmin(credential);
        }
        else {
            throw Error("");
        }
        
        return credential;
    }
    catch (erro) {
        throw erro;
    }
}