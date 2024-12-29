import React,{useState} from 'react';
import DemoContext from './DemoContext'
import Demo2 from './Demo2'

const Demo1 = () => {
    const [ num , setNum ] = useState(0)
    const handleAddClick = () => {
        setNum(num=>num+1)
    }
    const handleSubClick = () => {
        setNum(num => num -1)
    }
    return (
        console.log('爷爷组件'),
            <div style={{backgroundColor:'yellow'}}>
                <h1 >爷爷组件</h1>
                <DemoContext.Provider value={{num , handleAddClick , handleSubClick}}>
                    {num} <br/>
                    <Demo2></Demo2>
                </DemoContext.Provider>
            </div>
    );
};

export default Demo1;
