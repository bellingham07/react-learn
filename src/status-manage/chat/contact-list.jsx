
export default function ContactList({ contacts, to, onTo }) {
    return (
        <ul>
            {contacts.map(contact =>
                <li key={contact.email}>
                    <button onClick={() => {
                        onTo(contact);
                    }}>
                        {contact.name}
                    </button>
                </li>
            )}
        </ul>
    )
}
