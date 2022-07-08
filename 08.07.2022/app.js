const PORT = 4500;
const express = require("express");
const app = express();
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./static/public/Maxim");

app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
    res.render("index");
});
app.listen(4500, () => {
    console.log(`Server is up on port ${PORT}`)
})