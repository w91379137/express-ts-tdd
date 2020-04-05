const express = require('express');
let debug = require('debug')('app:root-controller');
import { Controller } from "./controller";
import { GlobalUse } from "../../global-use";

export class DebugController implements Controller {

    path = '/debug'
    router = express.Router()

    constructor() {

        this.router.get('/', this.get)

    }

    get = async (req, res) => {
        res.status(200).send(htmlShow({a: 1}))
    }
}

function htmlShow(obj: any) {

    return "<plaintext>" + JSON.stringify(obj, null, 2) + '\n'
}