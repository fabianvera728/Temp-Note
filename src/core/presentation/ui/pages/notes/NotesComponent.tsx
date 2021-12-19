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

  /* getStorageNotesData(); */
  const createNote = (note: INote) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="Notes is-flex is-flex-direction-row">
      <div className="Notes__sidebar is-flex is-flex-direction-column">
        <h1 className="is-title">Hola mundo</h1>
        <div className="Notes__sidebar-note is-flex-direction-column">
          <span>20 apr</span>
          <h2>Elaboracion de ideas</h2>
          <p>Planeacion de mis ideas conjuntas en un tiempo</p>
        </div>
      </div>
      <div>
        <h3>
          <strong>Notes</strong>
        </h3>
        <NewNote
          active={active}
          setActive={setActive}
          createNote={createNote}
        />
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
    </div>
  );
};

export default Notes;
