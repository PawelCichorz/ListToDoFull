import { Request, Response } from 'express';
import NoteM from '../models/noteM';
import NoteW from '../models/noteW';
import NoteT from '../models/noteT';
import NoteTh from '../models/noteTh';
import NoteF from '../models/noteF';
import NoteS from '../models/noteS';
import NoteSu from '../models/noteSu';

interface NoteRequest extends Request {
    body: {
        title: string;
        body: string;
    };
    params: {
        id: string;
    };
}

const noteActions = {
    // Poniedziałek
    async saveNoteM(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteM({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },

    async getAllnotesM(req: Request, res: Response) {
        const doc = await NoteM.find({});
        res.json(doc);
    },

    async getNoteM(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteM.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteM(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteM.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteM(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteM.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },

    // Wtorek
    async saveNoteT(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteT({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },
    async getAllnotesT(req: Request, res: Response) {
        const doc = await NoteT.find({});
        res.json(doc);
    },

    async getNoteT(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteT.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteT(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteT.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteT(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteT.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },

    // Środa
    async saveNoteW(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteW({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },
    async getAllnotesW(req: Request, res: Response) {
        const doc = await NoteW.find({});
        res.json(doc);
    },

    async getNoteW(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteW.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteW(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteW.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteW(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteW.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },
        

    // Czwartek
    async saveNoteTh(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteTh({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },
    async getAllnotesTh(req: Request, res: Response) {
        const doc = await NoteTh.find({});
        res.json(doc);
    },

    async getNoteTh(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteTh.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteTh(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteTh.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteTh(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteTh.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },

    // Piątek
    async saveNoteF(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteF({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },
    async getAllnotesF(req: Request, res: Response) {
        const doc = await NoteF.find({});
        res.json(doc);
    },

    async getNoteF(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteF.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteF(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteF.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteF(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteF.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },

    // Sobota
    async saveNoteS(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteS({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },
    async getAllnotesS(req: Request, res: Response) {
        const doc = await NoteS.find({});
        res.json(doc);
    },

    async getNoteS(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteS.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteS(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteS.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteS(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteS.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },

    // Niedziela
    async saveNoteSu(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const newNote = new NoteSu({
            title,
            body
        });
        await newNote.save();
        res.json(newNote);
    },
    async getAllnotesSu(req: Request, res: Response) {
        const doc = await NoteSu.find({});
        res.json(doc);
    },

    async getNoteSu(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const note = await NoteSu.findOne({ _id: id });
        res.json(note);
    },

    async updateNoteSu(req: NoteRequest, res: Response) {
        const { title, body } = req.body;
        const { id } = req.params;
        const note = await NoteSu.findOne({ _id: id });
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        note.title = title;
        note.body = body;
        await note.save();
        res.json(note);
    },

    async deleteNoteSu(req: NoteRequest, res: Response) {
        const { id } = req.params;
        const result = await NoteSu.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.send(`Note deleted: ${id}`);
    },
};

export default noteActions;