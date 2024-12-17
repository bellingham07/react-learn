import { getImageUrl } from './utils.js';
import { useState } from 'react';

// 更改 Avatar 组件，根据 size prop 请求最接近的图像尺寸。
// 具体来说，如果 size 小于 90，则将 's'（“small”）而不是 'b'（“big”）传给 getImageUrl 函数。
// 通过渲染不同 size prop 值的头像并在新选项卡中打开图像，来验证你的更改是否有效。

function computeSize(size) {
    return size < 90 ? 's' : 'b'
}

function Avatar2({ person, size }) {
    return (
        <>
            <h1>compute size:{computeSize(size)}</h1>
            <img
                className="avatar"
                src={getImageUrl(person, computeSize(size))}
                alt={person.name}
                width={computeSize(size)}
                height={computeSize(size)}
            />
        </>

    );
}

export default function Profile2() {
    const [isSize, setIsSize] = useState(0);
    return (
        <>
            <input onChange={e => setIsSize(e.target.value)} placeholder='input size...' />
            <h1>size:{isSize}</h1>
            <Avatar2
                size={isSize}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
        </>
    );
}
