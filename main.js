var App = require("./Application");
var gRPC = require("./gRPC/gRPC");

async function Execute() {
    try {
        await App.InitializeAsync();
        gRPC.InitializeServer();
    }
    catch (erro) {
        throw erro;
    }
}
Execute();