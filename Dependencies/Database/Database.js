var Dependency = require("dependency-manager.js").Models.Dependency;
var Mongo = require("mongodb")

module.exports = class Database extends Dependency {
    static Name = "Database";
    static HasBeenInitialized = true;
    static InitializeAsyncMustBeCalled = true;
    static Config = require("./config")
    static ConnectionString = `mongodb+srv://Admin:${this.Config.Password}@cluster0-x9l6p.gcp.mongodb.net/test?retryWrites=true&w=majority`
    static Connection;

    static async InitializeAsync() {
        try {
            await Database.Connect();
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static Connect() {
        return new Promise((resolve, reject) => {
            try {
                var Client = new Mongo.MongoClient(this.ConnectionString, { useNewUrlParser: true });
                Client.connect((erro, connection) => {
                    if (erro) {
                        throw erro;
                    }
                    Database.Connection = connection.db(Database.Config.DatabaseName);
                    resolve();
                })
            }
            catch (erro) {
                reject(erro);
            }
        })
    }

    constructor() {
        if (!Database.HasBeenInitialized) {
            throw Error("Cant build Database instance without initializing first");
        }
        super();
        this.Connection = Database.Connection;
        this.ObjectId = Mongo.ObjectId;
        return;
    }

    Connection;
    ObjectId;
}