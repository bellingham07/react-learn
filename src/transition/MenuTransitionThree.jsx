import SvgIcon from "./SvgIcon.jsx";
import { useState } from "react";
import '../assets/css/menu.scss'
import '../assets/css/order-dialog.scss'
import OrderDialog from "./OrderDialog.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { toast } from "react-toastify";

export default function MenuFour({ isMobileView }) {
    const [show, setShow] = useState(false);
    const [styleName, setStyleName] = useState('menu-cell cell_lt-enter-active');

    const handleShow = () => {
        setShow(true);
        setStyleName('menu-cell cell_lt-enter-active');
    }

    const handleClose = () => {
        setStyleName('menu-cell cell_lt-leave-active');
        setTimeout(() => {
            setShow(false);
        }, 500);
    }

    return (
        <>
            <button onClick={handleShow}>show</button>
            <button onClick={handleClose}>close</button>
            {/* {show && ( */}
            <div className="menu">
                <div className="menu-row">
                    <CSSTransition in={show} timeout={500} classNames="cell_lt" unmountOnExit>
                        <div className={styleName}>
                            <h1>123</h1>
                            <h1>456</h1>
                            <h1>789</h1>
                        </div>
                    </CSSTransition>
                </div>
            </div>
            {/* )} */}
        </>
    )
}
