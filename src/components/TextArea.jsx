import { useState } from "react";
import "./style.css"

function TextArea(){
    const [text, setText] = useState("");

    return(
        <div className="textArea">
            <textarea onChange={(event) => setText(event.target.value)}></textarea>
            <p>{text}</p>
        </div>
    )
}

export default TextArea