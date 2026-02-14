import * as convidadosServices from "../services/convidadosServices.js";

export async function CREATE(req, res) {
  try {
    await convidadosServices.CREATE(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.log("Erro ao registrar!");
    res.sendStatus(500);
  }
}

export async function listAll(req, res) {
  try {
    const convidadosAll = await convidadosServices.listAll();
    res.json(convidadosAll);
  } catch (error) {
    console.log("Erro ao listar todos os usuarios");
  }
}

export async function deletar(req, res) {
  try {
    await convidadosServices.deletar(req.params);
    res.sendStatus(200)
  } catch (error) {
    console.error('Erro ao deletar convidado', error)
    res.sendStatus(500)
  }
}

export async function search(req, res) {
  try {
    const convidados = await convidadosServices.search(req.query)
    res.status(200).json(convidados)
  } catch (error) {
    console.error('Usuario não encontrado!', error)
    res.sendStatus(500)
  }
}