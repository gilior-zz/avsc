const {Worker} = require('worker_threads')

function runService(workerData) {

    const worker = new Worker('./service.js', {workerData});

    worker.on('message', (res) => {
        console.log(res)
    });
    worker.on('error', (err) => {
      console.log(err)
    });
    // worker.on('exit', (code) => {
    //     if (code !== 0)
    //         reject(new Error(`Worker stopped with exit code ${code}`));
    // })

}

runService('a');
runService('b');
runService('c');
runService('d');


