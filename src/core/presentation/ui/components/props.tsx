import { INote } from "../../../../modules/core/interfaces/notes/inotes";

export interface PropsNewNote{
    active: boolean,
    setActive: any,
    createNote: any
}

export interface PropsNewNoteUi{
    active: boolean,
    createNote: any,
    handleChange: any,
    hideModal: any,
    note: INote,
}