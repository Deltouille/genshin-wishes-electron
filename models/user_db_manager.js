const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database("./database/user_db.sqlite");

exports.getUserInfo = (callback) => {
    db.serialize(function(){
        db.get(`SELECT * FROM user_info WHERE user_id = 1`, function(err, rows){
            callback(rows);
        });
    });
}

exports.insertUserInfo = () => {
   
}
