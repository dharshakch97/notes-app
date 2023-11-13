/* eslint-disable react/prop-types */
import { Stack } from "react-bootstrap";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteCard from "./NoteCard";
import { sortByDate } from "../util/utility"

function SideBar(props) {
    return (
        <div className="sidebar border-end">
            <Stack direction="horizantal" className="p-3 border-bottom">
                <h2>Notes</h2>
                <FontAwesomeIcon className="ms-auto icon-btn add-btn" icon={faFileCirclePlus} onClick={props.addNote}/>
            </Stack>
            <Stack>
                {sortByDate(props.notes).map((note) => {
                    return (
                        <NoteCard
                            key={note.id} id={note.id} title={note.title}
                            updatedAt={note.updatedAt} deleteNote={props.deleteNote}
                            currentNoteId={props.currentNoteId} setCurrentNoteId={props.setCurrentNoteId}
                        />
                    );
                })}
            </Stack>
        </div>
    )
}

export default SideBar
