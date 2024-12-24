import SvgIcon from "./SvgIcon.jsx";
import {useState} from "react";
import '../assets/css/menu.scss'
import '../assets/css/order-dialog.scss'
import OrderDialog from "./OrderDialog.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {toast} from "react-toastify";

export default function MenuTwo({isMobileView}) {
    const [isShow, setIsShow] = useState(false);
    const [isShowOrderDialog, setIsShowOrderDialog] = useState(false);
    const [itemShow, setItemShow] = useState(true);
    const [maskShow, setMaskShow] = useState(true);
    const menuList = [{
        id: 1, detail: [{
            id: 1, title: "博文", pos: "lt", icon: "archive", to: "Archive",
        }, //     {
            //     id: 2, title: "书单", pos: "mt", icon: "book", to: "Book",
            // }, {
            //     id: 3, pos: "rt", title: "关于", icon: "about", to: "About",
            // },
        ],
    }, //     {
        //     id: 2, detail: [{
        //         id: 4, title: "力扣", pos: "lc", icon: "leetcode", // to: 'Lineblog'
        //     }, {
        //         id: 5, pos: "mc", title: "订阅", icon: "order",
        //     }, {
        //         id: 6, title: "音频", pos: "rc", icon: "sing",
        //     },],
        // }, {
        //     id: 3, detail: [{
        //         id: 7, title: "Github", pos: "lb", icon: "github",
        //     }, {
        //         id: 8, title: "掘金", pos: "mb", icon: "juejin",
        //     }, {
        //         id: 9, title: "分享", pos: "rb", icon: "share",
        //     },],
        // },
    ]

    function handleShow() {
        // setIsShowOrderDialog(true)
        setIsShow(true);
        setMaskShow(true);
        setItemShow(true);
    }

    function handleClose() {
        setItemShow(false);
        setMaskShow(false);
        setTimeout(() => {
            setIsShow(false);
        }, 800);
    }

    function handleCellClick(id) {
        if (id === 5) {
            // 订阅
            const regSub = /.*#\d+_sub;/;
            const regUser = /.*#(\d+)_user;/;
            if (localStorage.info && regSub.test(localStorage.info)) {
                // 已经订阅
                // this.$toast.success("您已经订阅过啦");
                toast.success("您已经订阅过啦", {
                    position: "top-center",
                })
            } else if (localStorage.info && regUser.test(localStorage.info)) {
                // 已经注册用户，但是未订阅
                const id = localStorage.info.match(regUser)[1];
                subscribe(id);
            } else {
                // 未注册用户
                // this.showOrderDialog = true;
                setIsShowOrderDialog(true);
            }
        } else if (id === 4) {
            // window.open('https://leetcode-cn.com/u/lee-lei/', '_blank')
            window.open("https://leetcode.cn/u/nullpointerexception-5/", "_blank");
        } else if (id === 3) {
            // 关于页点击自己要滚动回首位
            window.scrollTo(0, 0);
        } else if (id === 6) {
            window.open("https://www.bilibili.com/video/BV1S9xhetEDW/?spm_id_from=333.999.0.0&vd_source=e0d189e1e85ff98712f101b3a444e0a4", "_blank");
        } else if (id === 7) {
            window.open("https://github.com/bellingham07", "_blank");
        } else if (id === 8) {
            window.open("https://juejin.cn/user/2986716538617176", "_blank");
        } else if (id === 9) {
            handleShare();
        }
        this.show = false;
    }

    // 订阅功能
    const subscribe = async (id) => {
        try {
            // await api.subscribe({ params: { id } });
            // const prevInfo = localStorage.getItem("info") || "";
            // localStorage.setItem("info", `${prevInfo}#${id}_sub;`);
            toast.success("订阅成功，非常感谢!");
            console.log("id:", id)
        } catch (error) {
            toast.error(error);
        }
    };

    // 复制分享功能
    const handleShare = () => {
        const cpText = window.location.href;
        navigator.clipboard
            .writeText(cpText)
            .then(() => {
                toast.success("已复制，去分享给朋友吧");
            })
            .catch(() => {
                toast.error("复制失败");
            });
    };

    return (<>
        <button className="menu-btn" onClick={handleShow}>
            <SvgIcon name={"menu"}/>
        </button>
        <OrderDialog openType={'subscribe'} isShow={isShowOrderDialog} setIsShow={setIsShowOrderDialog}/>
        <div>
            {isShow && (<div>
                <CSSTransition in={isShow && maskShow} timeout={300} classNames="menu-mask" unmountOnExit>
                    <div className="menu-mask" onClick={handleClose}/>
                </CSSTransition>
                {/*<div className="menu">*/}
                {/*    {menuList.map((row) => (*/}
                {/*        <div className="menu-row" key={row.id}>*/}
                {/*            /!*<TransitionGroup  component={null}>*!/*/}
                {/*                {row.detail.map((item) => {*/}
                {/*                    return (*/}
                {/*                        <CSSTransition*/}
                {/*                            in={isShow && itemShow}*/}
                {/*                            key={item.id}*/}
                {/*                            timeout={300}*/}
                {/*                            classNames="cell_lt"*/}
                {/*                        >*/}
                {/*                            <>*/}
                {/*                                {isShow && itemShow ? (*/}
                {/*                                    <div*/}
                {/*                                        className="menu-cell cell_lt"*/}
                {/*                                        onClick={() => handleCellClick(item.id)}*/}
                {/*                                    >*/}
                {/*                                        <div className="menu-cell-inside">*/}
                {/*                                            <div className="menu-cell--normal rect">*/}
                {/*                                                <SvgIcon name={item.icon}></SvgIcon>*/}
                {/*                                                <div>{item.title}</div>*/}
                {/*                                            </div>*/}
                {/*                                            <a href={item.to}>*/}
                {/*                                                <div className="menu-cell--flip rect">*/}
                {/*                                                    {item.title}*/}
                {/*                                                </div>*/}
                {/*                                            </a>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                ) : null}*/}
                {/*                            </>*/}
                {/*                        </CSSTransition>*/}
                {/*                    )*/}
                {/*                })}*/}
                {/*            </TransitionGroup>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="menu">
                    <div className="menu-row">
                        <>
                            {isShow && itemShow ? (
                                <div
                                    className="menu-cell cell_lt"
                                    onClick={() => handleCellClick(1)}
                                >
                                    <div className="menu-cell-inside">
                                        <div className="menu-cell--normal rect">
                                            <SvgIcon name={"archive"}></SvgIcon>
                                            <div>{"archive"}</div>
                                        </div>
                                        <a href={"archive"}>
                                            <div className="menu-cell--flip rect">
                                                {"archive"}
                                            </div>
                                        </a>
                                    </div>
                                </div>) : null}
                        </>
                    </div>
                </div>
            </div>)}
        </div>
    </>)
}
