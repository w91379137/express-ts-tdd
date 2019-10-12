import * as request from "supertest";
import * as app from "./app";

describe('Test the root path', () => {

    test("GET Request", async (done) => {

        request(app)
            .get("/")
            .end((err, res) => {
                expect(err).toBeNull
                expect(res.body.result).toEqual('result');
                expect(res.status).toBe(200);
                done();
            });
    });

    test("POST Request", async (done) => {

        let testBody = { name: 'test' };

        request(app)
            .post("/")
            .send(testBody)
            .end((err, res) => {
                // console.log(res.body);
                //{ success: true, result: { name: 'test' } }
                expect(err).toBeNull
                expect(res.body.result).toMatchObject(testBody)
                expect(res.status).toBe(200);
                done();
            });
    });
});

// https://www.codota.com/code/javascript/modules/supertest