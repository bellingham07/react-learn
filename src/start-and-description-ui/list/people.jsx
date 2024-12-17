import { people } from "./data"
import { getImageUrl } from "./utils"

export default function People() {
    const chemists = people.filter(p => p.profession === '化学家')
    const others = people.filter(p => p.profession !== '化学家')

    return (
        <>
            <Selector title="化学家" peoples={chemists} />
            <Selector title="其他" peoples={others} />
        </>
    )
}

function Selector({ title, peoples }) {
    const peopleList = peoples.map(person => <li key={person.id}>
        <img
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            因{person.accomplishment}而闻名世界
        </p>
        {/* <button onClick={() => info(person)}>log cur info</button> */}
    </li>)

    return (
        <ul>
            <h2>{title}</h2>
            {peopleList}
        </ul>
    )
}

function info(info) {
    console.log('cur info:', info)
}