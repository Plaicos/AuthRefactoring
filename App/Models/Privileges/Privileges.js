var DataManipulation = require("./DataManipulation/DataManipulationPrivilige")

module.exports = class Privileges {

    static Default() {
        let privilegies = new Privileges();
        privilegies.IsAdmin = false;
        privilegies.SelfData = DataManipulation.DefaultSelf();
        privilegies.ThirdPartyData = DataManipulation.DefaultThirdParty();
        return privilegies;
    }

    static Admin() {
        let privilegies = new Privileges();
        privilegies.IsAdmin = true;
        privilegies.SelfData = DataManipulation.AllAllowed();
        privilegies.ThirdPartyData = DataManipulation.AllAllowed();
        return privilegies;
    }

    SelfData;
    ThirdPartyData;
    IsAdmin;
}