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

    validate_obj(schema_type, obj) {
        var schame = this.get_schema(schema_type);
        return this.c(obj, schame)
    }

    validate(schema_type, schema_dict) {
        for (var schema of schema_dict) {
            var res = this.validate_obj(schema)
            if (!res)
                return false;
        }

    }

    c(obj, schame) {
        var obj_entries = Object.entries(obj);
        var schema_entries = Object.entries(schame);
        for (var obj_entry of obj_entries) {




            // find on schema entry with this type
            var schema_entry = schema_entries.find(schema_entry => (obj_entry[0] == schema_entry[0])
                || (!isNaN(parseInt(obj_entry[0])) && !isNaN(parseInt(schema_entry[0]))));



            // if not found match entry on schema -> invalid obj param
            if (!schema_entry)
                return false;
            var is_same_type = this.compareTypes(schema_entry[1], obj_entry[1])
            if (!is_same_type)
                return false;
        }
        return true;
    }

    compareTypes(schema_type, obj_value) {
        if (Object.prototype.toString.call(schema_type) === '[object Object]')
            if (Object.prototype.toString.call(obj_value) !== '[object Object]'
                || Object.keys(schema_type).length != Object.keys(obj_value).length)
                return false;
        //primitve type
        if (typeof schema_type == 'string') {
            var obj_type = typeof obj_value
            if (schema_type != obj_type)
                return false;
            return true;
        }
        else { // complex type
            return this.c(obj_value, schema_type)
        }

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
