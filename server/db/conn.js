const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
//const Db = "mongodb+srv://ParkingApp:ParkingApp@cluster0.ytlke.mongodb.net/ParkingAppDB?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("ParkingAppDB");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};