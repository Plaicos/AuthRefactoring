var Dependency = require("dependency-manager.js").Models.Dependency;
var jwt = require("jsonwebtoken");

module.exports = class Token extends Dependency {
    static Name = "Token";
    static InitializeAsyncMustBeCalled = false;
    static Key = require("./key");
    static Options = require("./options")

    static async InitializeAsync() {
        try {

        }
        catch (erro) {
            throw erro;
        }
    }

    static GetApp() {
        return require("../../Application");
    }

    static async GeneratePayload(user) {
        try {
            let payload = new Object();
            let App = this.GetApp();
            let credential = await App.UseCases.GetCredential(user);

            payload.GeneratedAt = Date.now();
            payload.User = credential.User;
            return payload;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async DecriptToken(token) {
        try {
            let key = Token.Key;
            return jwt.verify(token, key);
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateDepriptedToken(tokenData) {
        try {
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateToken(token) {
        try {
            let decriptedToken = await this.DecriptToken(token);
            this.ValidateDepriptedToken(decriptedToken);
            return decriptedToken.User;
        }
        catch (erro) {
            throw erro;
        }
    }

    constructor() {
        super();
    }

    async GenerateNew(user) {
        try {
            let payload = await Token.GeneratePayload(user);
            let options = Token.Options;
            let key = Token.Key;
            return jwt.sign(payload, key);
        }
        catch (erro) {
            throw erro;
        }
    }

    async Authenticate(token) {
        try {
            return await Token.ValidateToken(token);
        }
        catch (erro) {
            throw erro;
        }
    }
}