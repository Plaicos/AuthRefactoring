var App = require("../../../../Application");
var AccessProfile = require("./AccessProfile");

module.exports = class UserProfile extends AccessProfile {
    static ExportCredentialProfile() {
        try {
            let userProfile = new App.Models.Credential({});
            return App.Entities.Credential.MakeUser(userProfile);
        }
        catch (erro) {
            throw erro;
        }
    }
}