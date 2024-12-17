import { Person } from "./person";
export default function TodoList() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Person
                imgInfo={{ name: "Maria Skłodowska-Curie", url: 'szV5sdGs', alt: "Maria Skłodowska-Curie" }}
                proInfo={{ profession: "physicist and chemist", awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)", discovered: " polonium (chemical element)" }}
            />

            <Person
                imgInfo={{ name: "Katsuko Saruhashi", url: "YfeOqp2", alt: "Katsuko Saruhashi" }}
                proInfo={{ profession: "geochemist", awards: "(Miyake Prize for geochemistry, Tanaka Prize)", discovered: "a method for measuring carbon dioxide in seawater" }}
            />
        </div>
    );
}
