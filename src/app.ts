
require('source-map-support').install();

let debug = require('debug')('app:main')

//====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
// server 屬性建立

import * as express from 'express';
import { Server } from './server/server';
import { RootController } from './server/controller/root-controller';

// Middleware 中介軟體
function loggerMiddleware(req: express.Request, res: express.Response, next) {
    debug(`Method:${req.method} Path:${req.path} Body:${JSON.stringify(req.body)}`);
    next();
}

const port = 5000;
let server = new Server({
    port: port,
    controllers: [
        new RootController()
    ],
    middlewares: [
        loggerMiddleware
    ],
})

server.start()