module.exports = {
    //credential use cases
    CreateCredential: require("./CreateCredential"),
    GetCredential: require("./GetCredential"),
    RegisterCredential: require("./RegisterCredential"),
    UpdateCredential: require("./UpdateCredential"),
    DeleteCredential: require("./DeleteCredential"),
    AuthorizeCredential: require("./AuthorizeCredential"),
    //token use cases
    GenerateAuthToken: require("./GenerateAuthToken"),
    AuthenticateToken: require("./AuthenticateToken")
}