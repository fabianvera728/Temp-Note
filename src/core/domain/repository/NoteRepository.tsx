import {Note} from '../../data/Note';

export interface NoteRepository{
    getNote(id: string): Note;
    postNote(note: Note): void;
    deleteNote(id: string): void;
}