import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.query(`
  CREATE TABLE IF NOT EXISTS convidados (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    checkbox INTEGER
  );
`)
.then(() => console.log("Tabela verificada/criada"))
.catch(err => console.error("Erro ao criar tabela:", err));


export default pool;