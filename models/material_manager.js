const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database("./database/user_db.sqlite");

exports.insertMaterial = (material_id, material_name, material_type, material_quantity, material_atlas_id) => {
    const sql = `INSERT INTO material (material_id, material_name, material_type, material_quantity, material_atlas_id) VALUES ("${material_id}", "${material_name}", "${material_type}", "${material_quantity}", "${material_atlas_id}")`;
    const res = db.run(sql);
}

exports.getMaterialOfId = (material_id, callback) => {
    db.serialize(function(){
        db.get(`SELECT * FROM material WHERE material_id = ${material_id};`, function(err, rows){
            callback(rows);
        });
    });
}
