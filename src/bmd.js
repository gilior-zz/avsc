// Write your code here

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

    validate(schema_type, obj) {
        var schame = this.get_schema(schema_type);

        if (Object.entries(schame).length != Object.entries(obj).length) return false;
        if (JSON.stringify(Object.keys(schame)) != JSON.stringify(Object.keys(obj))) return false;

        var obj_entries = Object.entries(obj);

        var schema_entries = Object.entries(schame);
        for (var obj_entry of obj_entries) {
            console.log('obj_value', obj_entry)


            console.log('schema_entries', schema_entries)
            // find on schema entry with this type
            var entry = schema_entries.find(schema_entry => obj_entry[0] == schema_entry[0]);


            console.log('entry', entry)
            // if not found match entry on schema -> invalid obj param
            if (!entry) return false;

            //remove prop from schema
            // delete schame[entry[0]];

            console.log('schame', schame);


        }
        return true;

    }

    compareTypes(type_a, type_b) {
        //primitve type
        if (typeof type_a == 'string') {

            // type not primitive
            if (typeof type_b == 'string') return false
        }
        else  { // complex type

        }

    }

    level() {
        return {
            number: "number",
            rooms: [{boundaryPoints: [{"x": "number", "y": "number"}]}],
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
            number: "number",
            boundaryPoints: [{x: "number", y: "number"}]
        }
    }
}

module.exports = new BMD();
