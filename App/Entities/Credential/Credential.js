var App = require("../../../Application");
var Privileges = App.Models.Privileges;

module.exports = class Credential {
    static AccessProfiles = require("./AccessProfiles/Profiles");

    static MakeUser(credential) {
        try {
            credential.AccessLevel = 4;
            credential.Privileges = Privileges.Default();
            return credential;
        }
        catch (erro) {
            throw erro;
        }
    }

    static MakeAdmin(credential) {
        try {
            credential.AccessLevel = 1;
            credential.Privileges = Privileges.Admin();
            return credential;
        }
        catch (erro) {
            throw erro;
        }
    }

    static Authorize({ credential, profile, profileObject }) {
        try {
            this.ValidateAuthorizeInput({ credential, profile, profileObject });
            if (!profileObject) {
                profileObject = this.MatchProfile(profile);
            }
            return this.ValidateCredentialAccess(credential, profileObject);
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateAuthorizeInput({ credential, profile, profileObject }) {
        try {
            if (!profileObject && !profile) {
                throw Error("Cant Authorize Credential without an authorization profile or a authorization profile object");
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    //TODO make it dynamic;
    static MatchProfile(profile) {
        try {
            if (profile === "user") {
                return this.AccessProfiles.User.ExportCredentialProfile();
            }
            if(profile === "admin"){
                return this.AccessProfiles.Admin.ExportCredentialProfile();
            }
            throw Error("Inexistent access profile");
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateCredentialAccess(credential, configCredential) {
        try {
            let accessLevelIsValid = this.ValidateCredentialAccessLevel(credential.AccessLevel, configCredential.AccessLevel);
            let selfDataIsValid = this.ValidateCredentialDataPrivilege(credential.Privileges.SelfData, configCredential.Privileges.SelfData);
            let thirdPartyDataIsValid = this.ValidateCredentialDataPrivilege(credential.Privileges.ThirdPartyData, configCredential.Privileges.ThirdPartyData);
            if (accessLevelIsValid && selfDataIsValid && thirdPartyDataIsValid) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateCredentialAccessLevel(credentialAccess, configAccess) {
        try {
            if (credentialAccess > configAccess) {
                return false;
            }
            return true;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateCredentialDataPrivilege(credentialPrivilege, configPrivilege) {
        try {
            if (configPrivilege.Read && !credentialPrivilege.Read) {
                return false;
            }
            if (configPrivilege.Write && !credentialPrivilege.Write) {
                return false;
            }
            if (configPrivilege.Override && !credentialPrivilege.Override) {
                return false;
            }
            if (configPrivilege.Delete && !credentialPrivilege.Delete) {
                return false;
            }
            return true;
        }
        catch (erro) {
            throw erro;
        }
    }
}