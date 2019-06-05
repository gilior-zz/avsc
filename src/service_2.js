const {workerData, parentPort} = require('worker_threads');

function comapre_by_schema_structure() {
    var obj_entries = Object.entries(workerData.obj);
    var schema_entries = Object.entries(workerData.schame);
    for (var obj_entry of obj_entries) {

        //find schema entry that match this obj_entry
        var schema_entry = schema_entries.find(schema_entry => (obj_entry[0] == schema_entry[0])
            || (!isNaN(parseInt(obj_entry[0])) && !isNaN(parseInt(schema_entry[0]))));


        // if not found match entry on schema -> invalid obj param
        if (!schema_entry)
            return false;
        var is_same_type = compareTypes(schema_entry[1], obj_entry[1]) // try to match by obj value
        if (!is_same_type)
            return false;
    }
    return true;
}

function compareTypes(schema_type, obj_value) {
    // if schema_type is is  object
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
        return comapre_by_schema_structure(obj_value, schema_type)
    }

}

const c= comapre_by_schema_structure();
parentPort.postMessage({res: c})


