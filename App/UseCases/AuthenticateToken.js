var App = require("../../Application");
var UseCaseOperator = require("./Operator");

module.exports = async (token) => {
    try {
        return await App.Dependencies.Token.Authenticate(token);
    }
    catch (erro) {
        throw erro;
    }
}