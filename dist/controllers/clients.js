"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putRegistro = exports.postRegistro = exports.getRegistro = exports.getRegistros = void 0;
const client_1 = __importDefault(require("../models/client"));
const getRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield client_1.default.findAll();
        res.status(200).json(registros);
    }
    catch (error) {
        res.status(404).json({
            msg: 'Error al traer los registros'
        });
    }
});
exports.getRegistros = getRegistros;
const getRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const registro = yield client_1.default.findByPk(id);
    try {
        if (!registro) {
            return res.status(404).json({ msg: `No existe el registro con el id ${id}` });
        }
        else {
            return res.status(200).json(registro);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hable con el administrador' });
    }
    ;
});
exports.getRegistro = getRegistro;
const postRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, number, email, placeWork, description } = req.body;
    try {
        const cliente = yield client_1.default.create({
            name,
            number,
            email,
            placeWork,
            description
        });
        yield cliente.save();
        res.status(200).json(cliente);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hable con el administrador' });
    }
});
exports.postRegistro = postRegistro;
const putRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cliente = yield client_1.default.findByPk(id);
        if (!cliente) {
            res.status(400).json({
                msg: `No existe el usuario con el id ${id}`
            });
        }
        yield (cliente === null || cliente === void 0 ? void 0 : cliente.update(body));
        res.status(200).json({
            cliente,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hable con el administrador' });
    }
});
exports.putRegistro = putRegistro;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield client_1.default.findByPk(id);
    if (!cliente) {
        res.status(400).json({
            msg: `No existe el usuario con el id ${id}`
        });
    }
    ;
    // Eliminación fisica, donde se elimina también en la DB
    yield (cliente === null || cliente === void 0 ? void 0 : cliente.destroy());
    // Eliminación lógica, es decir que no se eliminar de la DB
    // await cliente?.update({status: false});
    res.json({
        msg: 'Registro borrado',
        cliente
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=clients.js.map