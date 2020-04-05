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
        res.status(200).send(htmlRelaod({ a: 1 }))
    }
}

function htmlRelaod(obj: any, time: number = 0) {
    let content = JSON.stringify(obj, null, 2)

    let reloadScript = ''
    if (time > 0) {
        reloadScript = `
        setTimeout(() => {
            location.reload();
        }, ${time})
        `
    }

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Debug</title>
            <script>
                ${reloadScript}
            </script>
        </head>

        <body>
        <plaintext>${content}
        `
}