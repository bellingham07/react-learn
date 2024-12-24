import { useState, useRef } from "react";
import './TestTransition.css'
import { CSSTransition } from "react-transition-group";


export default function TestTransition() {

    const menuList = [
        {
            id: 1,
            detail: [
                {
                    id: 1,
                    title: "博文",
                    pos: "lt",
                    icon: "archive",
                    to: "Archive",
                },
                {
                    id: 2,
                    title: "书单",
                    pos: "mt",
                    icon: "book",
                    to: "Book",
                },
                {
                    id: 3,
                    pos: "rt",
                    title: "关于",
                    icon: "about",
                    to: "About",
                },
            ],
        },
        {
            id: 2,
            detail: [
                {
                    id: 4,
                    title: "力扣",
                    pos: "lc",
                    icon: "leetcode",
                    // to: 'Lineblog'
                },
                {
                    id: 5,
                    pos: "mc",
                    title: "订阅",
                    icon: "order",
                },
                {
                    id: 6,
                    title: "音频",
                    pos: "rc",
                    icon: "sing",
                },
            ],
        },
        {
            id: 3,
            detail: [
                {
                    id: 7,
                    title: "Github",
                    pos: "lb",
                    icon: "github",
                },
                {
                    id: 8,
                    title: "掘金",
                    pos: "mb",
                    icon: "juejin",
                },
                {
                    id: 9,
                    title: "分享",
                    pos: "rb",
                    icon: "share",
                },
            ],
        },
    ]

    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    return (
        <div>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="my-node">
                <div ref={nodeRef}>
                    {"I'll receive my-node-* classes"}
                </div>
            </CSSTransition>
            <button type="button" onClick={() => setInProp(true)}>
                Click to Enter
            </button>
        </div>
    );
}