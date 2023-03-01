const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.use("/", express.static("public"));

app.use(bodyParser.json());
app.post("/bugreports", async (req, res) => {
    await prisma.bug_reports.create({ data: { bug_type: req.body.bug_type, description: req.body.description } })
    res.end();
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Listening on port: " + port);
});