const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.use(express.json({ extended: false }));
app.post("/api/bugreports", async (req, res) => {
    console.log("creating bug...");
    await prisma.bug_reports.create({ data: { bug_type: req.body.bug_type, description: req.body.description } })
    console.log("redirecting...");
    res.status(201).json({ msg: "Bug report created" });
})

module.exports = app;