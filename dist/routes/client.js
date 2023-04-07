"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../controllers/clients");
const router = (0, express_1.Router)();
router.get('/', clients_1.getRegistros);
router.get('/:id', clients_1.getRegistro);
router.post('/', clients_1.postRegistro);
router.put('/:id', clients_1.putRegistro);
router.delete('/:id', clients_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=client.js.map