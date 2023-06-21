const express = require("express");
const app = express();
const router = express.Router();
// const Schemamodel=require("./scehma1")
const funs = require("../controller/funs_of_routes");

router.post("/first", funs.firstfunction());
router.get("/second", funs.secondfunction);
router.delete("/delete", funs.deleteall);
router.post("/checker", funs.postform);
router.post("/post", (req, res) => {
  res.send("hello im first post in routers");
});

module.exports = router;
