import { NoteRepository } from "../domain/NoteRepository";
import { Note } from "./Note";

class NoteDTO{
    id: string = '';
    title: string = '';
    description: string = '';
}

export class NoteRepositoryImpl implements NoteRepository{
    
    storage = localStorage

    getNotes(): Note[] {
        throw new Error("Method not implemented.");
    }
    getNote(id: string): Note {
        throw new Error("Method not implemented.");
    }
    postNote(note: Note): void {
        throw new Error("Method not implemented.");
    }
    deleteNote(id: string): void {
        throw new Error("Method not implemented.");
    }

}