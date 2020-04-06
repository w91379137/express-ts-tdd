const express = require('express');
let debug = require('debug')('app:debug-controller');
import { Controller } from "./controller";
import { GlobalUse } from "../../global-use";

/*
http://localhost:5000/debug/?path=example
http://localhost:5000/debug/?path=example_obj

http://localhost:5000/debug/?path=example_arr
http://localhost:5000/debug/?path=example_arr_1
 */
export class DebugController implements Controller {

    path = '/debug'
    router = express.Router()

    constructor() {
        this.router.get('/', this.get)
        GlobalUse['example'] = debugExample()
    }

    get = async (req, res) => {

        let path = (req.query.path || '') as string
        let keyArr = pathParse(path)

        let obj = GlobalUse as any
        let check = []
        for (const key of keyArr) {

            check.push(key)
            obj = obj[key]

            if (!obj) {
                obj = {
                    path,
                    msg: `no value at ${check.join('_')}`
                }
                break
            }
        }

        res.status(200).send(htmlRelaod(obj))
    }
}

export function pathParse(path: string): any[] {
    return path.split('_')
        .filter(str => !!str) // 除去空字串
        .filter(str => {
            let maybeInt = parseInt(str)
            return isNaN(maybeInt) ? str : maybeInt
        }) // 把文字轉數字
}

function htmlRelaod(obj: any, time: number = 0) {
    let result = {} as any
    if (!!obj && (typeof obj.debugLog === 'function')) {
        result.debugLog = obj.debugLog()
    }
    if (!!obj) {
        result.raw = obj
    }
    let content = JSON.stringify(result, null, 2)

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

function debugExample() {
    return {
        obj: {
            hello: 'debug',
            debugLog: () => {
                let info = {
                    time: new Date(),
                    msg: 'test'
                }
                return info
            }
        },
        arr: [
            {
                hello: 'debug'
            },
            {
                hello2: 'debug2'
            },
        ]
    }
}