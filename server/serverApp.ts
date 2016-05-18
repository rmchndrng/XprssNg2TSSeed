import * as express from 'express'
import * as path from 'path';

export class ServerApp {

    private _App: express.Express;

    constructor() {
        this._App = express();
    }

    public setRoutes() {        
        this._App.use(express.static('client'));
        this._App.get('/', this._RenderIndex);
    }

    public startServer() {
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    }

    private _RenderHelloWorld(req: express.Request, res: express.Response) {
        res.send('Hello World!');
    }

    private _RenderIndex(req: express.Request, res: express.Response) {
        res.sendFile(path.resolve(__dirname, 'client/index.html'));
    }
}