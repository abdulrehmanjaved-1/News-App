const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 5005;
const router = require("./model/allroutes");
const path = require('path');
// const Connect = require("../connection");
const cors = require("cors");
const bodyParser = require("body-parser");
// const connectToMongoDB = require("../connection");



//connection to mongodb

const connectionURL =
  "mongodb+srv://abdulrehmanjaved:BnvH11joVIWwyvbC@cluster1.jywhpnb.mongodb.net/";
const databaseName = "project3"; // Replace 'your_database_name' with the actual name of your database
const collectionName = "collection3"; // Replace 'your_collection_name' with the actual name of your collection
// connectToMongoDB(connectionURL,databaseName,collectionName)
mongoose
  .connect(`${connectionURL}${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const collection = mongoose.connection.collection(collectionName);
    console.log(
      "Connected to MongoDB Atlas and specific database and collection!"
    );
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });



//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,"build copy")));
app.use(express.static(path.resolve(__dirname,"build")));
app.use("/", router);
app.get('/sign', (req, res) => {
  res.sendFile(path.resolve(__dirname,'build', 'index.html'));
});
app.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"build copy","index.html"))
})


// app.get('/realcheck',(req,res)=>{
    // res.send("helo im real one")
// })

app.listen(port, () => {
  console.log(`your app is listening at port ${port}`);
});
