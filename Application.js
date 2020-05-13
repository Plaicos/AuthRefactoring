var DependencyManager = new (require("dependency-manager.js"))();

module.exports = class Application {
    static RootPath = __dirname;
    static Errors;
    static Models = require("./App/Models/Models");
    static Entities;
    static Presenters
    static Events;
    static Dependencies;
    static UseCases;
    static Adapters;

    static async InitializeAsync() {
        try {
            await this.InitializeDependenciesAsync();
            this.Entities = require("./App/Entities/Entities");
            this.Adapters = require("./App/Adapters/adapters");
            this.UseCases = require("./App/UseCases/UseCases");
            this.ConfigureDatabaseAdapter();
        }
        catch (erro) {
            throw erro;
        }
    }

    static async InitializeDependenciesAsync() {
        try {
            var dependencyList = require("./Dependencies/list");

            for (let dependency of dependencyList) {
                DependencyManager.AddDependency(dependency);
            }
            this.Dependencies = await DependencyManager.InitializeAndExportAsync();
            return
        }
        catch (erro) {
            throw erro;
        }
    }

    static ConfigureDatabaseAdapter() {
        try {
            Application.Dependencies.DAO.SetDatabase(Application.Dependencies.Database);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

}