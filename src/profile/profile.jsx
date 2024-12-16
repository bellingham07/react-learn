import { getImageUrl } from "./utils";

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }) {
    return (
        <>
            <div className="card">{children}</div>
        </>
    )
}

export function Profile() {
    return (
        <>
            {/* <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size={100} />
            <Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={80} />
            <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={60} /> */}

            <Card>
                <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size={100} />
            </Card>

        </>
    );
}