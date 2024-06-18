import mongoose, { Schema, Document } from 'mongoose';

export interface INoteN extends Document {
    title: string;
    body: string;
    userId: mongoose.Types.ObjectId;
    day:{ type: String, required: true }}

const NoteNSchema: Schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    day:{ type: String, required: true }}
);

const NoteNModel = mongoose.model<INoteN>('NoteSu', NoteNSchema);

export default NoteNModel;