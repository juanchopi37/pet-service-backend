import cors from 'cors';
import express from 'express';
import type { Request, Response } from 'express';

class Server {
    private app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(cors()); // Es para definir las cabeceras de las peticiones
        this.app.use(express.json()); // Es para parsear el body de las peticiones en formato JSON
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => { // Ruta de la raiz
            res.send("<h1>Hola mundo</h1>");
        });

        this.app.get('/api', (req: Request, res: Response) => { // Ruta de la API
            res.send('<h1>Hola desde la api</h1>');
        });

        this.app.use((req: Request, res: Response) => { // Ruta no existente
            res.send('<h1>404 Not Found</h1>');
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port http://localhost:" + this.port);
        });
    }
}

export default Server;
