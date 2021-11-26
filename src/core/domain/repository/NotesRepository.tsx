import { Note } from '../../data/Note';

export interface NotesRepository{
    getNotes(): Note[];
}