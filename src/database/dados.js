import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const db = await open({
  filename: path.join(__dirname, "banco.db"),
  driver: sqlite3.Database,
});

await db.exec(`
    CREATE TABLE IF NOT EXISTS convidados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        checkbox INTEGER NOT NULL
        );
    `);
