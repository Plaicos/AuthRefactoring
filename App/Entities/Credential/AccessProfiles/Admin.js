var App = require("../../../../Application");
var AccessProfile = require("./AccessProfile");

module.exports = class AdminProfile extends AccessProfile {
    static ExportCredentialProfile() {
        try {
            let adminProfile = new App.Models.Credential({});
            return App.Entities.Credential.MakeAdmin(adminProfile);
        }
        catch (erro) {
            throw erro;
        }
    }
}