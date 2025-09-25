//Jonnas Pedro aluno do 2 Ano B

import express from "express";

const app = express()

function validarNumeros(a, b, res) {
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send("Erro: os parâmetros devem ser números.");
        return false;
    }
    return true;
}

// Observação: A função isNaN() determina se o valor é NaN ou não. Se o valor colocado na rota for um 
// letra por exemplo, ela vai retornor a mensagem "Erro: os parâmetros devem ser números."

app.get("/adicao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (!validarNumeros(a, b, res)) return;

    res.send((a + b).toString());
});

app.get("/subtracao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (!validarNumeros(a, b, res)) return;

    res.send((a - b).toString());
});

app.get("/multiplicacao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (!validarNumeros(a, b, res)) return;

    res.send((a * b).toString());
});

app.get("/divisao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (!validarNumeros(a, b, res)) return;

    if (b === 0) {
        res.status(400).send("Erro: divisão por zero não é permitida.");
        return;
    }

    res.send((a / b).toString());
});

app.listen(3000, () => {
    console.log("Servidor rodando em: http://localhost:3000/adicao/10/5");
});
