import { Note } from "../../data/Note";
import { NotesRepository } from "../repository/NotesRepository";

export interface NoteService{
    getStorageNotes(): Note[];
}

export class NoteServiceImpl implements NoteService{

    notesRepository: NotesRepository;

    constructor(noteRepository: NotesRepository){
        this.notesRepository = noteRepository;
    }

    getStorageNotes(): Note[] {
        return this.notesRepository.getNotes();
    }
 
}