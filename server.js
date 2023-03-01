const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.use("/", express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.post("/bugreports", async (req, res) => {
    // console.log("creating bug...");
    // await prisma.bug_reports.create({ data: { bug_type: req.body.bug_type, description: req.body.description } })
    // console.log("redirecting...");
    // res.redirect("/");
    console.log("testing");
    console.log(req)
    res.send("hello")
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Listening on port: " + port);
});