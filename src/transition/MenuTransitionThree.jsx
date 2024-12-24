import SvgIcon from "./SvgIcon.jsx";
import {useState} from "react";
import '../assets/css/menu.scss'
import '../assets/css/order-dialog.scss'
import OrderDialog from "./OrderDialog.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {toast} from "react-toastify";

export default function MenuFour({isMobileView}) {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={()=>setShow(!show)}>show</button>
            {show && (
                <div className="menu">
                    <div className="menu-row">
                        <CSSTransition in={show} timeout={500} classNames="cell_lt" unmountOnExit>
                            <div className="menu-cell cell_lt">
                                <h1>123</h1>
                                <h1>456</h1>
                                <h1>789</h1>
                            </div>
                        </CSSTransition>

                    </div>
                </div>
            )}
        </>
    )
}
