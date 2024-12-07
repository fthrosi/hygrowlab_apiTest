import express from "express";
import {
  addNote,
  deleteAllNotes,
  deleteNoteById,
  getAllNotes,
  getNoteById,
  updateNoteById,
} from "./notesController.js";

const router = express.Router();

router.get("/show", async (req, res) => {
  try {
    const result = await getAllNotes();
    res.status(201).json({
        message: "Notes fetched successfully",
        data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/show/:id", async (req, res) => {
    const id = req.params.id;
  try {
    const result = await getNoteById(id);
    res.status(201).json({
        message: "Note fetched successfully",
        data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/add", async (req, res) => {
    const { title, dateTime, note } = req.body;
  try {
    const result = await addNote({ title, dateTime, note });
    res.status(201).json({
        message: "Note added successfully",
        data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.put("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { title, dateTime, note } = req.body;
  try {
    const result = await updateNoteById(id, { title, dateTime, note });
    res.status(201).json({
        message: "Note updated successfully",
        data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
  try {
    const result = await deleteNoteById(id);
    res.status(201).json({
        message: "Note deleted successfully",
        data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.delete("/delete", async (req, res) => {
  try {
    const result = await deleteAllNotes();
    res.status(201).json({
        message: "All notes deleted successfully",
        data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;
