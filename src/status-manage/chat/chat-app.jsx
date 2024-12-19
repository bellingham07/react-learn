import { useState } from "react";
import ContactList from "./contact-list";
import Chat from "./chat";

export default function ChatApp() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <>
            <ContactList contacts={contacts} to={to} onTo={setTo} />
            <Chat name={to.name} />
        </>
    )
}

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];


