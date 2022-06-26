const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database("./database/user_db.sqlite");

exports.insertCraftEssence = (ce_id, ce_name, ce_rarity, ce_type, servant_owner_id) => {
    const sql = `INSERT INTO craft_essence (ce_id, ce_name, ce_rarity, ce_type, servant_owner_id) VALUES ("${ce_id}", "${ce_name}", "${ce_rarity}", "${ce_type}", "${servant_owner_id}")`;
    const res = db.run(sql);
}

exports.getCraftEssenceOfId = (ce_id, callback) => {
    db.serialize(function(){
        db.get(`SELECT * FROM craft_essence WHERE ce_id = ${ce_id};`, function(err, rows){
            callback(rows);
        });
    });
}