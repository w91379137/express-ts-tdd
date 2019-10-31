import * as request from "supertest";
import { Server } from "../server";
import { RootController } from './root-controller';

let server: Server

describe('Test RootController', () => {

    beforeAll(() => {
        let port = 10001
        server = new Server({
            port: port,
            controllers: [new RootController()],
            middlewares: [],
        })
        return server.start()
    })

    afterAll(() => {
        server.listen.close()
    })

    // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

    test("GET Request", (done) => {

        request(server.app)
            .get("/")
            .end((err, res) => {
                expect(err).toBeNull
                expect(res.body.result).toEqual('result');
                expect(res.status).toBe(200);
                done()
            })
    })

    test("POST Request", (done) => {

        let testBody = { name: 'test' };

        request(server.app)
            .post("/")
            .send(testBody)
            .end((err, res) => {
                // console.log(res.body);
                //{ success: true, result: { name: 'test' } }
                expect(err).toBeNull
                expect(res.body.result).toMatchObject(testBody)
                expect(res.status).toBe(200);
                done()
            })
    })
});