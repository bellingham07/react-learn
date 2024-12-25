import { useState } from "react"
import './ComputeStyle.css'
export default function ComputeStyle() {
    const [boxStyle, setBoxStyle] = useState('a1')
    const [stylePrefix, setStylePrefix] = useState('')
    const handleStyle = (id) => {
        let newPrefix = '';
        if (id === 1) {
            newPrefix = 'a';
        } else if (id === 2) {
            newPrefix = 'b';
        } else {
            newPrefix = 'c';
        }

        setStylePrefix(newPrefix);  // 更新 stylePrefix

        // 直接根据新的 prefix 和 id 设置 boxStyle
        setBoxStyle(`${newPrefix}${id}`);
    }

    const menuList = [
        { id: 1, style: 'a1' },
        { id: 2, style: 'b2' },
        { id: 3, style: 'c3' },
    ]

    return (
        <>
            <button onClick={() => handleStyle(1)}>set1</button>
            <button onClick={() => handleStyle(2)}>set2</button>
            <button onClick={() => handleStyle(3)}>set3</button>

            <div className="box">
                {menuList.map((item) => {
                    return (
                        <div key={item.id} className={boxStyle} onClick={() => handleStyle(item.id)}>{item.style}</div>
                    )
                })
                }
            </div>
        </>
    )
}