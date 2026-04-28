const express = require("express");
const router = express.Router();
const { pratos, getNextId } = require("../data");

router.get("/", (req, res) => {
  res.json(pratos);
});

router.get("/:id", (req, res) => {
  const prato = pratos.find((p) => p.id === Number(req.params.id));
  if (!prato) return res.status(404).json({ erro: "Prato não encontrado" });
  res.json(prato);
});

router.post("/", (req, res) => {
  const { nome, categoria, preco, disponivel = true } = req.body;
  if (!nome || !categoria || preco == null) {
    return res.status(400).json({ erro: "nome, categoria e preco são obrigatórios" });
  }
  const novo = { id: getNextId(), nome, categoria, preco, disponivel };
  pratos.push(novo);
  res.status(201).json(novo);
});

router.put("/:id", (req, res) => {
  const index = pratos.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ erro: "Prato não encontrado" });
  pratos[index] = { ...pratos[index], ...req.body, id: pratos[index].id };
  res.json(pratos[index]);
});

router.delete("/:id", (req, res) => {
  const index = pratos.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ erro: "Prato não encontrado" });
  pratos.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
