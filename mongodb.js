// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("users")
    .deleteMany({
      age: 25
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  db.collection("task")
    .deleteOne({
      description: "This is the first insert"
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});
