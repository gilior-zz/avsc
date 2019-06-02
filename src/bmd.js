// Write your code here

class BMD {


    get_schema(schema_type) {
        return this[schema_type]()
    }

    level() {
        console.log('hello')
    }

    line() {
        return {
            "name": "line",
            "fields": [{"name": "point", "type": "array", "items": "{\"name\": \"x\", \"type\": \"float\"}"}]
        }
    }

    point() {
        return {
            "name": "point",
            "fields": [{"name": "x", "type": "float"}, {"name": "y", "type": "float"}]
        }
    }

    room() {
        console.log('hello')
    }
}

module.exports = new BMD();
