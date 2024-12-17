import Quote from "./quotes";
import './styles.css'

export default function InspirationGenerator({ children }) {
    return (
        <>
            <h3>Your inspirational quote is:</h3>
            <Quote />
            {children}
        </>
    )
}