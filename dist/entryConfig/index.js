"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const tslib_1 = require("tslib");
require("dotenv/config");
const config_1 = tslib_1.__importDefault(require("config"));
const get = (key) => process.env[key] || config_1.default.get(key);
exports.get = get;
//# sourceMappingURL=index.js.map