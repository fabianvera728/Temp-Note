import { Note } from "../../data/Note";
import { NoteRepository } from "../NoteRepository";

export interface NoteService{
    getStorageNotes(): Note[];
    getStorageNote(id: string): Note;
}

export class NoteServiceImpl implements NoteService{

    noteRepository: NoteRepository;

    constructor(noteRepository: NoteRepository){
        this.noteRepository = noteRepository;
    }

    getStorageNotes(): Note[] {
        return this.noteRepository.getNotes();
    }
    getStorageNote(id: string): Note {
        return this.noteRepository.getNote(id)
    }

}