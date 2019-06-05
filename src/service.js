const {workerData, parentPort} = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
for (var j = 0; j < 9999; j++) {
    console.log(j)
}
// console.log('hi')
if(j==9999)
parentPort.postMessage({hello: workerData})