import shortid from "shortid";
import { INote } from "../../../../../modules/core/interfaces/notes/inotes";
import Note from "./components/note/note";
import "./notes.css";
import useFilter from "../../../../../modules/core/hooks/filter";
import NOTES from "../../../../../modules/core/mocks/notes";
import NewNote from "../../components/NewNote";
import {useState} from "react";

const Notes = () => {
    const [notes, setNotes] = useState(NOTES);
    const { query, setQuery, results } = useFilter(notes);
    const [active, setActive] = useState<boolean>(false);

    const createNote = (note: INote) => {
        setNotes([...notes, note])
    }

    return (
        <div className="Notes">
            <h3>
                <strong>Notes</strong>
            </h3>
            <NewNote active={active} createNote={createNote} setActive={setActive}/>
            <div className="is-flex is-flex-direction-row">
                <button className="button is-primary" onClick={() => setActive(true)}>New note</button>
                <input
                    className="input"
                    value={query}
                    placeholder="Search note"
                    type="text"
                    onChange={(e: any) => setQuery(e.target.value)}
                />
            </div>
            <div className="Notes__notes pt-4">
                {results.map((note: INote) => (
                    <Note key={shortid.generate()} {...note} />
                ))}
            </div>
        </div>
    );
};

export function sumaDobleIncremental(a: number, b: number) {
    return a + b;
}

export default Notes;
