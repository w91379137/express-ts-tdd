
const exec = require('child_process').exec;

export async function ping(
    ip: string,
    timeout: number = 1000,
) {
    let p = new Promise((resolve, _) => {
        let cmd = `ping -c 1 -W ${timeout} ${ip}`
        exec(cmd, (error, stdout, stderr) => {
            // if (error || stderr) {
            //     console.log(error, stderr)
            // }
            resolve(stdout || '')
        })
    })

    return p
}

export async function pingTest(
    ip: string,
    timeout: number = 1000,
): Promise<boolean> {

    let result = await ping(ip, timeout) as string

    // 判斷字串
    let resultArr = result.split("/n")
        // 正常的
        .filter(str => str.includes('icmp_seq'))
        .filter(str => str.includes('ttl'))
        .filter(str => str.includes('time'))

        //不正常含有
        .filter(str => !str.includes('Unreachable'))

    // console.log(resultArr)
    return resultArr.length > 0
}