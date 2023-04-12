const os = require('os');

const currentSystem = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentSystem);

const UserInfo = os.userInfo()
console.log(UserInfo);
const UptimeSystem = `the system uptime is ${os.uptime()} seconds`
console.log(UptimeSystem);
