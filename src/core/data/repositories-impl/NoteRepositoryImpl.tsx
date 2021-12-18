import { NotesRepository } from "../../domain/repository/NotesRepository";
import { Note } from "../Note";

class NoteDTO{
    id: string = '';
    title: string = '';
    description: string = '';
}

export class NoteRepositoryImpl implements NotesRepository{
    
    storage = localStorage

    getNotes(): Note[] {
        const notes = this.storage.getItem('notes')
        console.log(notes)
        return [];
    }
    getNote(id: string): Note {
        throw new Error("Method not implemented.");
    }
    createNote(note: Note): void {
        const notes = this.storage.getItem('notes')
        this.storage.setItem('notes',"newnote")
    }
    deleteNote(id: string): void {
        throw new Error("Method not implemented.");
    }

}