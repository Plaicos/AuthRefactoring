var App = require("../../Application");

module.exports = class GrpcRequestAdapter {
    static ToNewCredential(grpcRequest) {
        try {
            let requestData = grpcRequest.request;
            let request = new App.Models.NewCredential();
            request.User = requestData.user;
            request = this.CheckForType(requestData, request);
            return request;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToGenerateTokenRequest(grpcRequest) {
        try {
            let requestData = grpcRequest.request;
            let user = requestData.user;
            return user;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToAuthenticateTokenRequest(grpcRequest) {
        try {
            let requestData = grpcRequest.request;
            let token = requestData.token;
            return token;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToAuthorizeRequest(grpcRequest) {
        try {
            let requestData = grpcRequest.request;
            let request = new App.Models.AuthorizeRequest();
            request.User = requestData.user;
            request.Profile = requestData.profile;
            return request;
        } 
        catch (erro) {
            throw erro;    
        }
    }

    static CheckForType(requestData, request) {
        try {
            let type = {};
            if (requestData.isUser) {
                request.IsUser = true;
            }
            else if (requestData.isStaff) {
                request.IsStaff = true;
            }
            else if (requestData.isMaintainer) {
                request.IsMaintainer = true;
            }
            else if (requestData.isAdmin) {
                request.IsAdmin = true;
            }
            //default
            else {
                request.IsUser = true;
            }
            return request;
        }
        catch (erro) {
            throw erro;
        }
    }
}