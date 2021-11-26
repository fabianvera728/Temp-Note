import { INote } from "../../../../../../../modules/core/interfaces/notes/inotes";
import './note.css';

const Note = ({name, description, state, date}: INote) => {
    return (
        <div className="Note">
            <p>{name}</p>
            <p>{state}</p>
        </div>
    )
}

export default Note;