const express = require("express");
const app = express();

app.use("/", express.static("public"));

// app.get("/", (req, res) => {
//     res.send("Helló, Világ!");
// });

app.get("/", function(req, res) {
    res.send("Helló, World!");
});

app.get("/nodejs", (req, res) => {
    res.send(
        "A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül."
    );
});

app.get("/express", (req, res) => {
    res.send(
        "Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült."
    );
});

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});