function A({ children }) {
    return (
        <>
            {children}
        </>
    )
}

function B() {
    return (
        <>
            <div>hello</div>
        </>
    )
}

function C() {

    return (
        <>
            <button onClick={() => alert('hi')}>btn</button>
        </>
    )
}

export default function RespondingEvents() {
    return (
        <>
            <A>
                <B />
            </A>

            <A>
                <C />
            </A>
        </>
    )
}