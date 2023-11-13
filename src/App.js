// import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid'
import SideBar from './components/SideBar'
import Note from './components/Note'
import { useState, useEffect } from 'react';

function App() {

	const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || [])
	const [currentNote, setCurrentNote] = useState(notes[0]?.id || "")

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes))
	}, [notes])

	function addNote() {
		const newNote = {
			id: nanoid(),
			title: "Untitled",
			content: "",
			updatedAt: Date.now()
		}
		setNotes(prev => [...prev, newNote])
		setCurrentNote(newNote.id)
	}

	function updateNote(updatedNote) {
		setNotes(prev => prev.map(note => {
			if (note.id === updatedNote.id) return updatedNote;
			else return note;
		}));
	}

	function deleteNote(noteToDeleteId) {
		setNotes(prevNotes => prevNotes.filter(note => note.id !== noteToDeleteId));
		// Automatically selecting the latest note if the user deletes the currently selected note
		if (noteToDeleteId === currentNote && notes.length > 0) {
			setCurrentNote(notes[0].id);
		}
	}
	
	function getCurrentNote() {
		return notes.find(note => note.id === currentNote) || notes[0];
	}


  	return (
		<div className='home'>
			<SideBar
				notes={notes} addNote={addNote} deleteNote={deleteNote}
				currentNoteId={currentNote} setCurrentNoteId={setCurrentNote}
			/>
			<div className='side-home'>
				<h3>Notes description</h3>
				<Note className="content" updateNote={updateNote} currentNote={getCurrentNote()} />
			</div>
    	</div>
  	);
}

export default App;
