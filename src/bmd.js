// Write your code here

// to run: node --experimental-worker index.js

const {Worker} = require('worker_threads');

class BMD {
    constructor(path) {
        this._path = path;
    }

    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    get_schema(schema_type) {
        return this[schema_type]()
    }

    validate_by_schema_type(schema_type, obj) {

        return new Promise((resolve) => {
            var schema = this.get_schema(schema_type);
            const workerData = {schema, obj};
            const worker = new Worker('./service.js', {workerData});
            worker.on('message', resolve);
        })
    }

    async validate(schema_type, schema_dict) {
        var promises = [];
        for (var schema of schema_dict) {
            promises.push(this.validate_by_schema_type(schema_type, schema))
        }
        const resolved = await Promise.all(promises);
        return !resolved.some(i => i.res === false);
    }

    level() {
        return {
            number: "number",
            rooms: [{boundaryPoints: [{"x": "number", "y": "number"}], name: 'string', number: "number",}],
            architect: {"name": "string", "age": "number", "company": "string",}
        }
    }

    line() {
        return {
            a: {x: "number", y: "number"},
            b: {x: "number", y: "number"},
        }
    }

    point() {
        return {
            "x": "number", "y": "number"
        }
    }

    room() {
        return {
            name: 'string',
            number: "number",
            boundaryPoints: [{x: "number", y: "number"}]
        }
    }
}

module.exports = new BMD();
