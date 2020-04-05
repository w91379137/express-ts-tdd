import { pingTest } from "./ping"

// 單獨啟動
// jest -t "ping"  

describe('Test PingTest', () => {

    test("Success", async (done) => {
        let result = await pingTest('8.8.8.8')
        expect(result).toBe(true)
        done()
    })

    test("Timeout", async (done) => {
        let result = await pingTest('8.8.8.8', 1)
        expect(result).toBe(false)
        done()
    })

    test("Fail", async (done) => {
        let result = await pingTest('192.168.0.231')
        expect(result).toBe(false)
        done()
    })
})