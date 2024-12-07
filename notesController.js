import db from "./db.js";

export async function getAllNotes() {
  try {
    const sql = "SELECT * FROM notes";
    const [result] = await db.query(sql);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function getNoteById(id) {
  try {
    const sql = "SELECT * FROM notes WHERE id=?";
    const [result] = await db.query(sql, [id]);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function addNote({ title, dateTime, note }) {
  try {
    const sql = "INSERT INTO notes (title, dateTime, note) VALUES (?, ?,?)";
    const [result] = await db.query(sql, [title, dateTime, note]);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function updateNoteById(id, { title, dateTime, note }) {
  try {
    const sql = "UPDATE notes SET title=?, dateTime=?, note=? WHERE id=?";
    const [result] = await db.query(sql, [title, dateTime, note, id]);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteNoteById(id) {
  try {
    const sql = "DELETE FROM notes WHERE id=?";
    const [result] = await db.query(sql, [id]);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteAllNotes() {
  try {
    const sql = "DELETE FROM notes";
    const [result] = await db.query(sql);
    return result;
  } catch (err) {
    console.error(err);
  }
}
