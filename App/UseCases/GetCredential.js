var App = require("../../Application");
var UseCaseOperator = require("./Operator");

module.exports = async (user) => {
    try {
        let userExist = await App.Dependencies.DAO.CheckIfCredentialExist(user);
        if(userExist){
            return await App.Dependencies.DAO.GetCredential(user);
        }
        else {
            throw Error(`The user '${user}' does not exist`)
        }
    }
    catch(erro){
        throw erro;
    }
}