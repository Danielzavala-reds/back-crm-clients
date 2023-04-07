
import express, {Application} from 'express';
import clientsRoutes from "../routes/client";
import cors from 'cors';
import db from '../db/conecction';



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        registros: '/api/clientes',
    }


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Ejecutar metodo para la conexion con la DB
        this.dbConecction();
        // Metodos iniciales /* Los middlewares se tienen que ejecutar primero */
        this.middlewares();
        // Definicion de rutas
        this.routes();
    }

    // TODO: Conectar a la DB
    async dbConecction (){
        try {
            await db.authenticate();
            console.log('Database online')
        } catch (error: any) {
            throw new Error (error);
        }
    }

    // Middlewares
    middlewares(){
        // CORS
        this.app.use(cors());
        // Parseo del body
        this.app.use(express.json());
        // Servir contenido estatico
    }

    routes(){
        this.app.use(this.apiPaths.registros, clientsRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }


}

export default Server;