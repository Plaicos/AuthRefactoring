var Dependency = require("dependency-manager.js").Models.Dependency;

//Adapted for MongoDB
module.exports = class DAO extends Dependency {
    static Name = "DAO";
    static AsyncInitMustBeCalled = false;

    //properties
    Db;
    ObjectId;
    Collections;

    constructor() {
        super();
    }

    //methods
    SetDatabase(db) {
        this.Db = db.Connection;
        this.ObjectId = db.ObjectId
        this.Collections = {
            Credentials: this.Db.collection("Credentials")
        }
    }

    async PersistCredential(credential) {
        try {
            await this.Collections.Credentials.insertOne(credential);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    async GetCredential(user) {
        try {
            return new Promise((resolve, reject) => {
                this.Collections.Credentials.find({ User: user }).toArray((erro, arr) => {
                    if (erro) {
                        return reject(erro);
                    }
                    if (arr.length === 0) {
                        return reject(Error(`Credential for username '${user}' does not exist`));
                    }
                    else {
                        return resolve(arr[0]);
                    }
                });
            });
        }
        catch (erro) {
            throw erro;
        }
    }

    async UpdateCredential(credential) {
        try {
            await this.Collections.Credentials.updateOne({ User: credential.User }, credential);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    async DeleteCredential(user) {
        try {
            await this.Collections.Credentials.remove({ User: user });
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    CheckIfCredentialExist(user) {
        return new Promise((resolve, reject) => {
            try {
                this.Collections.Credentials.find({ User: user }).toArray((erro, arr) => {
                    if (erro) {
                        throw erro;
                    }
                    if (arr.length > 0) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                });
            }
            catch (erro) {
                reject(erro);
            }
        });
    }

}