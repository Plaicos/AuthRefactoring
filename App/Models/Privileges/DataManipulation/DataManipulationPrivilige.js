module.exports = class DataManipulationPrivilege {
    static DefaultSelf() {
        let privilege = new DataManipulationPrivilege();
        privilege.Read = true;
        privilege.Write = true;
        privilege.Delete = true;
        privilege.Override = true;
        return privilege;
    }

    static DefaultThirdParty() {
        let privilege = new DataManipulationPrivilege();
        privilege.Read = false;
        privilege.Write = false;
        privilege.Delete = false;
        privilege.Override = false;
        return privilege;
    }

    static AllForbiden() {
        let privilege = new DataManipulationPrivilege();
        privilege.Read = true;
        privilege.Write = true;
        privilege.Delete = true;
        privilege.Override = true;
        return privilege;
    }

    static AllAllowed() {
        let privilege = new DataManipulationPrivilege();
        privilege.Read = true;
        privilege.Write = true;
        privilege.Delete = true;
        privilege.Override = true;
        return privilege;
    }

    Read;
    Write;
    Delete;
    Override;
}