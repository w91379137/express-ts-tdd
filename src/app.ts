
require('source-map-support').install();

let debug = require('debug')('app:main')

debug(`env:${env}`)
debug(`git_hash:${git_hash}`)

//====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
// local 服務建立

import { GlobalUse } from './global-use';
import { storage } from './service/localstorage';
import { append } from './service/append';
import { log } from './service/log';
import { terminal } from './service/child';

//====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
// server 屬性建立

import * as express from 'express';
import { Server } from './server/server';
import { RootController } from './server/controller/root-controller';
import { DebugController } from './server/controller/debug-controller';

async function run() {

    //====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
    // local 服務建立
    GlobalUse.myStorage = storage
    // GlobalUse.myStorage.setItem('time', (new Date()).toString());
    // GlobalUse.myStorage.getItem('time'));

    GlobalUse.append = append
    // GlobalUse.append("data/data.txt", "test")

    GlobalUse.log = log
    // GlobalUse.log("test")

    // debug(terminal)

    //====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
    // server 屬性建立

    // Middleware 中介軟體
    function loggerMiddleware(req: express.Request, res: express.Response, next) {
        debug(`Method:${req.method} Path:${req.path} Body:${JSON.stringify(req.body)}`)
        next();
    }

    const port = 5000
    let server = new Server({
        port: port,
        controllers: [
            new RootController(),
            new DebugController(),
        ],
        middlewares: [
            loggerMiddleware
        ],
    })

    server.start()
}

run()