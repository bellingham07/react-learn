import { useState } from "react"

export default function Chat({ name }) {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    return (
        <>
            <textarea value={text} placeholder={`chat to ${name}`} onChange={(e) => setText(e.target.value)}></textarea>

            <button onClick={() => {

                setMessages([...messages, `msg-> ${name}: ${text}`])
                setText('')
            }
            }>send to {name}</button>

            <ul>
                {messages.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
        </>
    )
}
