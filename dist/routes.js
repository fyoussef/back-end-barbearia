"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
exports.routes = (0, express_1.Router)();
exports.routes.get('/', function (req, res) {
    res.json({ msg: 'Rodando' });
});
//# sourceMappingURL=routes.js.map