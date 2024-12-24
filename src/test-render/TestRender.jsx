export default function TestRender() {
    const menuList = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About',
            link: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            link: '/contact'
        }
    ]

    const [show, setShow] = useState(false)

    return (
        <>
            {show && (
                <div onClick={() => setShow(!show)}>
                    {menuList.map((item) => {
                        <>
                            <h1>{item.id}</h1>
                            <h2>{item.id}</h2>
                            <h3>{item.id}</h3>
                            <br />
                        </>

                    })}
                </div>
            )}
        </>
    )
}