function Item({ isPacked, name }) {
    if (isPacked) {
        return <li >{name}✅</li>
    } else {
        return <li >{name}</li>
    }
}

export default function Condition() {
    const items = [
        { name: 'T-shirt', isPacked: true },
        { name: 'Jeans', isPacked: false },
        { name: 'Sneakers', isPacked: true },
        { name: 'Hat', isPacked: true },
        { name: 'Socks', isPacked: false },
    ]

    return (
        <ul>
            {/* {items.map((item) => <Item key={item.name} {...item} />)} */}
            {items.map((item) => (
                <Item key={item.name} name={item.name} isPacked={item.isPacked} />
            ))}
        </ul>
    )
}