
require('source-map-support').install();

let debug = require('debug')('app:main')

//====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
// server 屬性建立

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Middleware 中介軟體
function loggerMiddleware(req: express.Request, res: express.Response, next) {
    // console.log(`Method:${req.method} Path:${req.path} Body:${JSON.stringify(req.body)}`);
    next();
}
app.use(loggerMiddleware);

//====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

// start the Express server
const port = 5000;
const listen = app.listen(port, () => {
    debug(`server is running on port ${listen.address()['port'] || listen.address().toString()}`);
});

//====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====