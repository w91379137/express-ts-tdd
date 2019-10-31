import { Server } from "./server";

describe('Test Server', () => {

    test("Port", async (done) => {

        let port = 10000
        let server = new Server({
            port: port,
            controllers: [],
            middlewares: [],
        })

        server.start().then(() => {
            expect(server.listen.address()['port']).toBe(port);
            done()
        })

    })

})