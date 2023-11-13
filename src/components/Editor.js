import { Form } from "react-bootstrap";

function Editor(props) {
    function handleFormChange(event) {
        const {name, value} = event.target
        props.updateNote({ ...props.currentNote, updatedAt: Date.now(), [name]: value })
    }

    return (
        <>
            {props.currentNote ? (<Form>
                <Form.Group>
                    <Form.Control name="title" type="text" 
                    placeholder="Title..." className="mb-4 p-3"
                    onChange={handleFormChange} />
                    <Form.Control name="content" type="text"
                    placeholder="Content..." as="textarea" rows={10} cols={100} className="p-3"
                    value={props.currentNote.content} onChange={handleFormChange} />
                </Form.Group>
            </Form>): (<div>
                <h2>No added notes yet! Add new note</h2>
            </div>)}
        </>
    )
}

export default Editor;
