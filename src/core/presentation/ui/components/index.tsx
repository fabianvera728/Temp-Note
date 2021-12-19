import { INote } from "../../../../modules/core/interfaces/notes/inotes";
import { useState } from "react";
import NewNoteUI from "./ui";
import {PropsNewNote} from "./props";

const NewNote = ({ active, setActive, createNote }: PropsNewNote) => {
  const cleanNote = (): INote => {
    return { name: "", state: false, description: "", date: "" };
  };

  const [note, setNote] = useState<INote>(cleanNote);

  const handleChange = (e: any) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const hideModal = () => {
    setActive(false);
  };

  const create = () => {
    createNote(note);
    setNote(cleanNote());
    hideModal();
  };

  return (
    <NewNoteUI
      active={active}
      createNote={create}
      handleChange={handleChange}
      hideModal={hideModal}
      note={note}
    />
  );
};

export default NewNote;