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


        return this.c(obj, schame)

    }

    c(obj, schame) {
        var obj_entries = Object.entries(obj);
        var schema_entries = Object.entries(schame);
        if (obj_entries.length != schema_entries.length) return false;
        if (JSON.stringify(Object.keys(schame)) != JSON.stringify(Object.keys(obj))) return false;
        for (var obj_entry of obj_entries) {
            console.log('obj_value', obj_entry)


            console.log('schema_entries', schema_entries)
            // find on schema entry with this type
            var schema_entry = schema_entries.find(schema_entry => obj_entry[0] == schema_entry[0]);


            console.log('schema_entry', schema_entry)
            // if not found match entry on schema -> invalid obj param
            if (!schema_entry) return false;
            var is_same_type = this.compareTypes(schema_entry[1], obj_entry[1])
            if (!is_same_type) return false;
        }
        return true;
    }

    compareTypes(schema_type, obj_value) {
        //primitve type
        if (typeof schema_type == 'string') {
            var obj_type = typeof obj_value
            return schema_type == obj_type
        }
        else { // complex type
            return this.c(obj_value, schema_type)
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
