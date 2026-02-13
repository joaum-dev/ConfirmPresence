import { db } from "../database/dados.js";

export async function CREATE(body = {}) {
  const { nome, checkbox } = body;

  await db.run("INSERT INTO convidados (nome, checkbox) VALUES (?, ?)", [
    nome,
    checkbox,
  ]);
}

export async function listAll() {
  return db.all("SELECT * FROM convidados");
}

export async function deletar(params = {}) {
  const { id } = params;
  return await db.run("DELETE FROM convidados WHERE id = ?", [id]);
}

export async function search(query = {}) {
  const { nome } = query;

  if(!nome) {
    return await db.all("SELECT * FROM convidados")
  }

  return await db.all(
    "SELECT * FROM convidados WHERE nome LIKE ?",
    [`%${nome}%`],
  );
}
