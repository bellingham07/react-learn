import Panel from './panel';
import { getImageUrl } from './utils';

// let currentPerson;

export default function Profile3({ person }) {
    const currentPerson = person;
    return (
        <Panel>
            <Header currentPerson={currentPerson} />
            <Avatar currentPerson={currentPerson} />
        </Panel>
    )
}

function Header({ currentPerson }) {
    return <h1>{currentPerson.name}</h1>;
}

function Avatar({ currentPerson }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(currentPerson)}
            alt={currentPerson.name}
            width={50}
            height={50}
        />
    );
}
