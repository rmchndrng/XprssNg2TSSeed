import * as express from 'express'

export class ServerApp {
    
    private _App: express.Express;
    
    constructor() {
        this._App = express();        
    }
    
    public setRoutes() {        
        this._App.get('/', this._RenderHelloWorld);          
    }

    public startServer() {
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    }

    private _RenderHelloWorld(req: express.Request, res: express.Response) {
        res.send('Hello World!');
    }
}