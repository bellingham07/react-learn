import { useState } from 'react';
import './response.css';

export default function Picture() {
    const [isActive, setActive] = useState(false);
    let bacc = 'background'
    let baccPic = 'picture--active'

    if (isActive) {
        bacc = 'background--active'
    } else {
        baccPic = 'picture'
    }

    return (
        <div className={bacc} onClick={() => setActive(false)}>
            <img className={baccPic} onClick={(e) => {
                e.stopPropagation()
                setActive(true)
            }} src="https://i.imgur.com/5qwVYb1.jpeg" alt="picture" />
        </div>
    )
}
