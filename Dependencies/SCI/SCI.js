var Dependency = require("dependency-manager.js").Models.Dependency;
var gRPC = require("../../gRPC/gRPC");

module.exports = class SCI extends Dependency {
    static InitializeAsyncMustBeCalled = true;

    static Name = "SCI";

    static Client;

    static async InitializeAsync() {
        try {
            gRPC.InitializeClient();
            this.Client = gRPC.ExportClient();
        }
        catch (erro) {
            throw erro;
        }
    }

    constructor() {
        super();
    }
}