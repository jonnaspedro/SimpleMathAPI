import express from "express";

const app = express()

app.get("/adicao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.send(a + b);
});

app.get("/subtracao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.send(a - b);
});

app.listen(3000, () => {
    console.log("http://localhost:3000/adicao");
});