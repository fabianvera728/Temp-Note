import shortid from "shortid";
import { INote } from "../../../../../modules/core/interfaces/notes/inotes";
import Note from "./components/note/note";
import "./notes.css";
import useFilter from "../../../../../modules/core/hooks/filter";
import NOTES from "../../../../../modules/core/mocks/notes";
import { useState } from "react";
import NewNote from "../../components";
import { getStorageNotesData } from "./NotesPresenter";

const Notes = () => {
  const [notes, setNotes] = useState(NOTES);
  const { query, setQuery, results } = useFilter(notes);
  const [active, setActive] = useState<boolean>(false);

  getStorageNotesData();
  const createNote = (note: INote) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="Notes">
      <h3>
        <strong>Notes</strong>
      </h3>
      <NewNote active={active} setActive={createNote} createNote={setActive} />
      <div className="is-flex is-flex-direction-row">
        <button className="button is-primary" onClick={() => setActive(true)}>
          New note
        </button>
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

export default Notes;
