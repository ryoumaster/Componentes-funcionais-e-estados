import { useState } from "react"

function WhyReact(){

    const textos = [
        ["pão", "batata", "queijo"],
        ["macarrao", "carne", "ovo"],
        ["sapo", "cachorro", "gato"]
    ]

    const [content, setContent] = useState([])

    function showContent(index){
        setContent (textos[index])
    }

    return (
        <div className="whyReact">
            <div>
                <button onClick={() => showContent(0)}>Conteudo 1</button>
                <button onClick={() => showContent(1)}>Conteudo 2</button>
                <button onClick={() => showContent(2)}>Conteudo 3</button>
            </div>
            <ul>
                {content.map((text, index) =>(
                    <li key={index}>{text}</li>
                ))}
            </ul>
        </div>
    )
}

export default WhyReact