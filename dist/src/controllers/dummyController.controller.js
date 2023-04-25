"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
let DummyController = class DummyController {
    constructor() {
        this.test = () => {
            console.log("From Dummy Controller");
        };
    }
};
DummyController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__metadata("design:paramtypes", [])
], DummyController);
exports.DummyController = DummyController;
//# sourceMappingURL=dummyController.controller.js.map