"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const typedi_1 = require("typedi");
const dummyController_controller_1 = require("../controllers/dummyController.controller");
class Routes {
    constructor() {
        this.dummyController = typedi_1.Container.get(dummyController_controller_1.DummyController);
    }
    setup(app) {
        app.get("/", this.dummyController.test);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map