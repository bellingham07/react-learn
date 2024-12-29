import React ,{useContext}from 'react';
import DemoContext from './DemoContext'

const Demo3 = () => {
    const aaa = useContext(DemoContext)
    console.log('111',aaa ) // 111 {num: 0, handleAddClick: ƒ, handleSubClick: ƒ}
    return (
        console.log('儿子组件',aaa ),
            <div style={{backgroundColor:'pink'}}>
                <h3>儿子组件</h3>
                <div>
                    <button onClick={aaa.handleSubClick}>-</button>
                    {aaa.num}
                    <button onClick={aaa.handleAddClick}>+</button>
                </div>
            </div>
    );
};

export default Demo3;
