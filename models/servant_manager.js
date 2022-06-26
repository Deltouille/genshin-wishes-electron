const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database("./database/user_db.sqlite");

exports.insertServant = (servant_id, servant_name, servant_class, servant_rarity, servant_atlas_id) => {
    const sql = `INSERT INTO servant (servant_id, servant_name, servant_class, servant_rarity, servant_atlas_id) VALUES("${servant_id}","${servant_name}", "${servant_class}", "${servant_rarity}", "${servant_atlas_id}")`;
    const res = db.run(sql);
}

exports.getServant = (servant_id, callback) => {
    db.serialize(function() {
        db.get(`SELECT * FROM servant WHERE servant_id = ${servant_id};`, function(err, rows) {
            callback(rows);
        });
     });
}

exports.getServantByAtlasId = (servant_id, callback) => {
    db.serialize(function() {
        db.get(`SELECT * FROM servant WHERE servant_atlas_id = ${servant_id};`, function(err, rows) {
            callback(rows);
        });
     });
}

