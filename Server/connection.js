const mongoose = require('mongoose');

async function connectToMongoDB(url, database, collection) {
  const connectionURL = url;
  const databaseName = database;
  const collectionName = collection;

  return mongoose.connect(`${connectionURL}${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectToMongoDB;




