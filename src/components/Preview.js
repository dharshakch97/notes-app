/* eslint-disable react/prop-types */
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Preview(props) {
    return (
        <>
            <h2 className="fw-bold">
                {props.currentNote.title}
            </h2>
            <ReactMarkdown>
                {props.currentNote.content}
            </ReactMarkdown>
        </>
    )
}

export default Preview
