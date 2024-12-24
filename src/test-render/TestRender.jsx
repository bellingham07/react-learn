import { useState } from "react"
export default function TestRender() {
    const menuList = [
        {
            id: 1,
            name: 'Home',
            link: 'rt'
        },
        {
            id: 2,
            name: 'About',
            link: 'mt'
        },
        {
            id: 3,
            name: 'Contact',
            link: 'lt'
        }
    ]

    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(true)}>Show Menu</button>
            <div>
                {show && (
                    <div onClick={() => setShow(!show)} className="menu">
                        {menuList.map((item) => {
                            return (
                                <div key={item.id} className={`cell_${item.link}`}>
                                    <h1>{item.id}</h1>
                                    <h2>{item.id}</h2>
                                    <h3>{item.id}</h3>
                                    <br />
                                </div>
                            )

                        })}
                    </div>
                )}
            </div >
        </>
    )
}