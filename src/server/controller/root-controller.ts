const express = require('express');
import { Controller } from "./controller";

export class RootController implements Controller {

    path = '/'
    router = express.Router()

    constructor() {

        this.router.get('/', async (req, res) => {
            res.status(200).send({
                success: true,
                result: 'result',
            })
        })

        this.router.post('/', async(req, res) => {

            let body = req.body
        
            res.status(200).send({
                success: true,
                result: body,
            })
        })

    }

}