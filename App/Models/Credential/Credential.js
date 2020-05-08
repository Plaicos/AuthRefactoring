var Priviligies = require("../Priviligies/Priviligies");

module.exports = class Credential {
    static DefaultAccessLevel = 5;

    static MakeUser(credential) {
        try {
            credential.AccessLevel = 4;
            credential.Privilegies = Priviligies.Default();
            return credential;
        }
        catch (erro) {
            throw erro;
        }
    }

    static MakeAdmin(credential) {
        try {
            credential.AccessLevel = 1;
            credential.Privilegies = Priviligies.Admin();
            return credential;
        }
        catch (erro) {
            throw erro;
        }
    }

    User;
    AccessLevel;
    Privilegies;

    constructor({ credential, user }) {
        if (!credential || !(credential instanceof Credential)) {
            this.User = user;
            this.AccessLevel = Credential.DefaultAccessLevel;
            this.Privilegies = Priviligies.Default();
        }
        else {
            this.User = credential.User;
            this.Privilegies = credential.Privilegies;
            this.AccessLevel = credential.AccessLevel;
        }
        return;
    }
}