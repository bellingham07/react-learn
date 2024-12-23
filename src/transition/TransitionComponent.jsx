import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './transition.css'

function TransitionComponent() {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFlag(true);
        }, 800);
    }, []);

    return <CSSTransition
        in={flag}
        timeout={300}
    >
        <div id="box"></div>
    </CSSTransition>
}

export default TransitionComponent;
