"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
require("reflect-metadata");
const config = tslib_1.__importStar(require("../entryConfig"));
const routes_1 = require("./routes/routes");
// Express App init
const app = (0, express_1.default)();
// register routes
const routes = new routes_1.Routes();
routes.setup(app);
// Listening
const PORT = config.get("PORT") || 6000;
app.listen(PORT, () => console.log(`=== Server listening on port: ${PORT} ===`));
exports.default = app;
//# sourceMappingURL=main.js.map