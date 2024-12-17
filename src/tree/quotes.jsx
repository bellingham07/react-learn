import { useState } from "react"

export default function Quote() {
    const [index, setIndex] = useState(0)
    return (
        <>
            {msgs[index]}
            <br />
            <button onClick={() => setIndex((index + 1) % msgs.length)}>inspire me again</button>
        </>
    )
}

const msgs = [
    "hello",
    "hi",
    "how are you",
    "what's up",
    "i'm fine",
    "i'm good",
]