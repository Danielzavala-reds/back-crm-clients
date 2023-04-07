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
const express_1 = __importDefault(require("express"));
const client_1 = __importDefault(require("../routes/client"));
const cors_1 = __importDefault(require("cors"));
const conecction_1 = __importDefault(require("../db/conecction"));
class Server {
    constructor() {
        this.apiPaths = {
            registros: '/api/clientes',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Ejecutar metodo para la conexion con la DB
        this.dbConecction();
        // Metodos iniciales /* Los middlewares se tienen que ejecutar primero */
        this.middlewares();
        // Definicion de rutas
        this.routes();
    }
    // TODO: Conectar a la DB
    dbConecction() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conecction_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    // Middlewares
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Parseo del body
        this.app.use(express_1.default.json());
        // Servir contenido estatico
    }
    routes() {
        this.app.use(this.apiPaths.registros, client_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map