// 总的来说，在react中，删除元素用filter，添加元素用map，修改元素用map，绝大部分都要配合state使用
import { useState } from 'react';

let nextId = 0;

// 增加元素
// setArtists([
//   ...artists // 将原数组中的元素放在队首
//   { id: nextId++, name: name },
//   ...artists // 将原数组中的元素放在末尾
// ]);

function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>振奋人心的雕塑家们：</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            {/* 关键点 */}
            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>添加</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

// 删除元素
// 使用filter
// setArtists(
//   artists.filter(a => a.id !== artist.id)
// );

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

function List() {
    const [artists, setArtists] = useState(
        initialArtists
    );

    return (
        <>
            <h1>振奋人心的雕塑家们：</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            删除
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

// 转换数组

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // 不作改变
                return shape;
            } else {
                // 返回一个新的圆形，位置在下方 50px 处
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        // 使用新的数组进行重渲染
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                所有圆形向下移动！
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    );
}

// 替换数组中的元素

let initialCounters = [
    0, 0, 0
];

function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                // 递增被点击的计数器数值
                return c + 1;
            } else {
                // 其余部分不发生变化
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() => {
                        handleIncrementClick(i);
                    }}>+1</button>
                </li>
            ))}
        </ul>
    );
}

// 插入元素
function List() {
    const [name, setName] = useState('');
    // 任何索引
    const [index, setIndex] = useState(0);
    const [artists, setArtists] = useState(
        initialArtists
    );

    function handleClick() {
        const insertAt = index; // 可能是任何索引
        const nextArtists = [
            // 插入点之前的元素：
            ...artists.slice(0, insertAt),
            // 新的元素：
            { id: nextId++, name: name },
            // 插入点之后的元素：
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return (
        <>
            <h1>振奋人心的雕塑家们：</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                value={index}
                onChange={e => setIndex(e.target.value)}
                placehoder="输入索引"
            />
            <button onClick={handleClick}>
                插入
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

// 其他情况

// 拷贝数组，再去修改数组
// const nextList = [...list];
// nextList[0].seen = true; // 问题：直接修改了 list[0] 的值
// setList(nextList);

// 拷贝对象

// setMyList(myList.map(artwork => {
//   if (artwork.id === artworkId) {
//     // 创建包含变更的*新*对象
//     return { ...artwork, seen: nextSeen };
//   } else {
//     // 没有变更
//     return artwork;
//   }
// }));