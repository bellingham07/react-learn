import { useState } from 'react';
import ContactList from './contactList';
import EditContact from './editContact';
import './styles.css';

export default function ContactManager() {
    const [
        contacts,
        setContacts
    ] = useState(initialContacts);

    const [
        selectedId,
        setSelectedId
    ] = useState(0);

    const selectedContact = contacts.find(c =>
        c.id === selectedId
    );

    function handleSave(updatedData) {
        const nextContacts = contacts.map(c => {
            if (c.id === updatedData.id) {
                return updatedData;
            } else {
                return c;
            }
        });
        setContacts(nextContacts);
    }

    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={selectedId}
                onSelect={id => setSelectedId(id)}
            />
            <hr />
            {/* key={selectedId} 通过key指定一个 key 
            能够让 React 将 key 本身而非它们在父组件中的顺序作为位置的一部分。
            这就是为什么尽管你用 JSX 将组件渲染在相同位置，但在 React 看来它们是两个不同的计数器。
            因此它们永远都不会共享 state。每当一个计数器出现在屏幕上时，它的 state 会被创建出来。
            每当它被移除时，它的 state 就会被销毁。在它们之间切换会一次又一次地使它们的 state 重置。 
            todo 使用key可以让我们在同一位置的state不再共享信息
            */}
            <EditContact
                key={selectedId}
                initialData={selectedContact}
                onSave={handleSave}
            />
        </div>
    )
}

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
