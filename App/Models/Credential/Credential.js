var Privileges = require("../Privileges/Privileges");

module.exports = class Credential {
    static DefaultAccessLevel = 5;
    
    User;
    AccessLevel;
    Privileges;

    constructor({ credential, user }) {
        if(!user){
            user = "";
        }
        if (!credential || !(credential instanceof Credential)) {
            this.User = user;
            this.AccessLevel = Credential.DefaultAccessLevel;
            this.Privileges = Privileges.Default();
        }
        else {
            this.User = credential.User;
            this.Privileges = credential.Privileges;
            this.AccessLevel = credential.AccessLevel;
        }
        return;
    }
}