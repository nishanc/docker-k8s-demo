const express = require("express");
const app = express();
const port = 3000;

if (!port) {
    throw new Error("Port not configured");
}

app.get("/", (req, res) => {
  res.send("Welcome to Kubernetes demo");
});

app.get("/ping", (req, res) => {
    const response = {
        from: req.query.from,
        response: "pong"
    };

    console.log(`[${new Date().toISOString()}] [FROM: ${req.query.from ?? "(N/A)"}] Response: ${JSON.stringify(response)}`);

    res.send(response);
  })

app.listen(port, () => {
  console.log(`Web app listening on port ${port}`);
})