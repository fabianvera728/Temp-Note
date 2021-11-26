import shortid from "shortid";
import { INote } from "../../../../../modules/core/interfaces/notes/inotes";
import Note from "./components/note/note";
import "./notes.css";
import useFilter from "../../../../../modules/core/hooks/filter";
import NOTES from "../../../../../modules/core/mocks/notes";

const Notes = () => {
    const notes = NOTES;
    const { query, setQuery, results } = useFilter(notes);

    return (
        <div className="Notes">
            <h3>
                <strong>Notes</strong>
            </h3>
            <input
                value={query}
                type="text"
                onChange={(e: any) => setQuery(e.target.value)}
            />
            <div className="Notes__notes">
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
