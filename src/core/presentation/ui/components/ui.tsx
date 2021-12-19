import { PropsNewNoteUi } from "./props";

const NewNoteUI = ({active, createNote, hideModal, note, handleChange }: PropsNewNoteUi) => {
    return(
        <div>
            <div className={`modal ${ active ? "is-active": ""}`}>
                <div onClick={hideModal} className="modal-background"/>
                <div className="modal-content">
                    <div className="card p-4">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    onChange={handleChange}
                                    name="name"
                                    value={note.name}
                                    type="text"
                                    placeholder="e.g Alex Smith"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <input
                                    className="input"
                                    onChange={handleChange}
                                    name="description"
                                    value={note.description}
                                    type="text"
                                    placeholder="e.g. alexsmith@gmail.com"/>
                            </div>
                        </div>
                        <button className="button is-outlined" onClick={createNote}>Agregar</button>
                    </div>
                </div>
                <button className="modal-close is-large" onClick={hideModal} aria-label="close"/>
            </div>
        </div>
    )
}

export default NewNoteUI;