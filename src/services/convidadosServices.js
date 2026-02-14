import pool from "../database/connection.js"

export async function CREATE(body = {}) {
  const { nome, checkbox } = body;

  await pool.query("INSERT INTO convidados (nome, checkbox) VALUES ($1, $2)", [
    nome,
    checkbox,
  ]);
}

export async function listAll() {
  const result = await pool.query("SELECT id, nome, checkbox FROM convidados ORDER BY id DESC");

  return result.rows;
}

export async function deletar(params = {}) {
  const { id } = params;
  return await pool.query("DELETE FROM convidados WHERE id = $1", [id]);
}

export async function search(query = {}) {
  const { nome } = query;

  if(!nome) {
    return await pool.query("SELECT id, nome, checkbox FROM convidados ORDER BY id DESC")
  }

  const result =  await db.all(
    "SELECT id, nome FROM convidados WHERE nome ILIKE $1",
    [`%${nome}%`],
  );

  return result.rows;
}
