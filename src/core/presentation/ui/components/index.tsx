import {INote} from "../../../../modules/core/interfaces/notes/inotes";
import {useState} from "react";
import NewNoteUI  from "./new-note.ui";

interface Props{
    active: boolean,
    setActive: any,
    createNote: any
}

const NewNote = (props: Props) => {
    const cleanNote = (): INote =>  {
        return {name: "", state: false, description: "", date: ""}
    }

    const [note, setNote] = useState<INote>(cleanNote);

    const handleChange = (e: any) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    const hideModal = () => {
        props.setActive(false);
    }

    const createNote = () => {
        props.createNote(note)
        setNote(cleanNote())
        hideModal()
    }

    return (
        <NewNoteUI
            active={props.active}
            createNote={createNote}
            handleChange={handleChange}
            hideModal={hideModal}
            note={note}/>
    )

}

export default NewNote;