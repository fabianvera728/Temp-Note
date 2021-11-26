import { NoteRepositoryImpl } from "../../../../data/repositories-impl/NoteRepositoryImpl"
import { NoteServiceImpl } from "../../../../domain/interactors/NoteUseCases";

export const getStorageNotesData = () => {
    let noteRepository = new NoteRepositoryImpl();
    let noteService = new NoteServiceImpl(noteRepository);
    return noteService.getStorageNotes();
}